import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { ItineraryComponent } from './components/itinerary/itinerary.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { CustomPlanComponent } from './components/custom-plan/custom-plan.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    DestinationsComponent,
    ItineraryComponent,
    FooterComponent,
    WhatsappButtonComponent,
    CustomPlanComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  selectedDestination: string | null = null;

  onDestinationSelected(destination: string) {
    this.selectedDestination = destination;
  }
}
