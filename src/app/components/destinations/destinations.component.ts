import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-destinations',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './destinations.component.html',
    styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent {
    @Output() destinationSelected = new EventEmitter<string>();

    destinations = [
        {
            name: 'Munnar',
            image: 'assets/images/munnar.jpg',
            description: 'Breathtaking tea gardens and misty hills.'
        },
        {
            name: 'Alappuzha',
            image: 'assets/images/alappuzha.jpg',
            description: 'Experience the "Venice of the East" on a traditional houseboat.'
        },
        {
            name: 'Wayanad',
            image: 'assets/images/wayanad.jpg',
            description: 'Lush green forests and wildlife sanctuaries.'
        },
        {
            name: 'Varkala',
            image: 'assets/images/varkala.jpg',
            description: 'Stunning cliffs adjacent to the Arabian Sea.'
        },
        {
            name: 'Idukki',
            image: 'assets/images/idukki.jpg',
            description: 'Home to the arch dam and wildlife sanctuaries.'
        },
        {
            name: 'Kochi',
            image: 'assets/images/kochi.jpg',
            description: 'The Queen of the Arabian Sea, blending history and modernity.'
        }
    ];

    selectDestination(name: string) {
        this.destinationSelected.emit(name);
        const element = document.getElementById('itinerary');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
