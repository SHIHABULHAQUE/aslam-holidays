import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
    scrollToDestinations() {
        const element = document.getElementById('destinations');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
