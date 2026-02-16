import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-custom-plan',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './custom-plan.component.html',
    styleUrls: ['./custom-plan.component.scss']
})
export class CustomPlanComponent {
    isModalOpen = false;

    openModal() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }

    submitPlan(event: Event) {
        event.preventDefault();
        alert('Thank you! Our travel expert will contact you shortly to plan your custom trip.');
        this.closeModal();
    }
}
