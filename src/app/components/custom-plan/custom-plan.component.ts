import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-custom-plan',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './custom-plan.component.html',
    styleUrls: ['./custom-plan.component.scss']
})
export class CustomPlanComponent {
    isModalOpen = false;

    // Form Data
    name: string = '';
    phone: string = '';
    days: number | null = null;

    destinations = {
        Munnar: false,
        Alappuzha: false,
        Wayanad: false,
        Varkala: false,
        Kochi: false,
        Idukki: false
    };

    openModal() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }

    submitPlan(event: Event) {
        event.preventDefault();

        // underlying logic to filter checked destinations
        const selectedDestinations = Object.entries(this.destinations)
            .filter(([_, selected]) => selected)
            .map(([name]) => name)
            .join(', ');

        const message = `*New Trip Inquiry*\n\n` +
            `*Name:* ${this.name}\n` +
            `*Phone:* ${this.phone}\n` +
            `*Destinations:* ${selectedDestinations || 'Not specified'}\n` +
            `*Days:* ${this.days || 'Not specified'}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919895113071?text=${encodedMessage}`; // Default business number
        // Checking floating button...

        window.open(whatsappUrl, '_blank');
        this.closeModal();
    }
}
