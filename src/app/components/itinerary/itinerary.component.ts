import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-itinerary',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './itinerary.component.html',
    styleUrls: ['./itinerary.component.scss']
})
export class ItineraryComponent implements OnChanges {
    @Input() destination: string | null = null;

    itineraryTitle = 'Your Dream Itinerary';
    itinerarySubtitle = 'A suggested Plan to experience the best of Kerala';

    currentItinerary: any[] = [];

    allItineraries: any = {
        'Munnar': [
            { day: 1, title: 'Arrival & En Route', description: 'Arrival in Kochi, drive to Munnar. Visit Cheeyappara & Valara waterfalls.', icon: 'fa-car' },
            { day: 2, title: 'Munnar Sightseeing', description: 'Visit Eravikulam National Park, Tea Museum, and Mattupetty Dam.', icon: 'fa-camera' },
            { day: 3, title: 'Leisure & Departure', description: 'Morning leisure at the resort. Drive back to Kochi for departure.', icon: 'fa-plane-departure' }
        ],
        'Alappuzha': [
            { day: 1, title: 'Houseboat Embarkation', description: 'Board your private houseboat. Cruise through the scenic canals and lagoons.', icon: 'fa-ship' },
            { day: 2, title: 'Village Life', description: 'Witness the local life along the backwaters. Visit paddy fields and ancient temples.', icon: 'fa-sun' },
            { day: 3, title: 'Beach & Departure', description: 'Morning visit to Alappuzha Beach and Lighthouse. Departure.', icon: 'fa-water' }
        ],
        'Wayanad': [
            { day: 1, title: 'Welcome to Wayanad', description: 'Drive to Wayanad. Check in to resort. Visit Pookode Lake.', icon: 'fa-mountain' },
            { day: 2, title: 'Caves & Viewpoints', description: 'Explore Edakkal Caves and Lakkidi Viewpoint. Evening at Banasura Sagar Dam.', icon: 'fa-binoculars' },
            { day: 3, title: 'Falls & Wildlife', description: 'Visit Soochipara Waterfalls. Zip-lining activity. Departure.', icon: 'fa-water' }
        ],
        'Varkala': [
            { day: 1, title: 'Cliff & Beach', description: 'Arrival in Varkala. Relax at the Papanasam Beach and explore the cliff cafes.', icon: 'fa-umbrella-beach' },
            { day: 2, title: 'Temple & Backwaters', description: 'Visit Janardanaswamy Temple. Enjoy a boat ride in Kappil Backwaters.', icon: 'fa-om' },
            { day: 3, title: 'Ayurveda & Departure', description: 'Relaxing Ayurvedic massage. Shopping for souvenirs. Departure.', icon: 'fa-spa' }
        ],
        'Idukki': [
            { day: 1, title: 'Hill Station Drive', description: 'Drive through the winding roads to Idukki. Visit Idukki Arch Dam.', icon: 'fa-road' },
            { day: 2, title: 'High Range Views', description: 'Visit Hill View Park and Kalvari Mount. Outstanding panoramic views.', icon: 'fa-cloud-sun' },
            { day: 3, title: 'Nature & Departure', description: 'Visit Idukki Wildlife Sanctuary. Drive back to the plains.', icon: 'fa-paw' }
        ],
        'Kochi': [
            { day: 1, title: 'Historic Fort Kochi', description: 'Visit Chinese Fishing Nets, St. Francis Church, and Dutch Palace.', icon: 'fa-landmark' },
            { day: 2, title: 'Culture & Shopping', description: 'Jew Town antiques shopping. Kathakali dance performance in the evening.', icon: 'fa-theater-masks' },
            { day: 3, title: 'Marine Drive & Departure', description: 'Morning boat ride at Marine Drive. Lulu Mall visit. Airport transfer.', icon: 'fa-shopping-bag' }
        ],
        'default': [
            { day: 1, title: 'Arrival in Kochi', description: 'Pick up from Cochin International Airport. Transfer to hotel. Evening sunset cruise.', icon: 'fa-plane-arrival' },
            { day: 2, title: 'Munnar - The Tea Gardens', description: 'Drive to Munnar. Visit Cheeyappara Waterfalls and tea museums.', icon: 'fa-coffee' },
            { day: 3, title: 'Munnar Sightseeing', description: 'Explore Eravikulam National Park to see the Nilgiri Tahr. Visit Mattupetty Dam.', icon: 'fa-tree' },
            { day: 4, title: 'Thekkady Wilderness', description: 'Drive to Thekkady. Boat safari in Periyar Wildlife Sanctuary.', icon: 'fa-paw' },
            { day: 5, title: 'Aleppey Houseboat', description: 'Experience the magic of Kerala backwaters with an overnight stay in a houseboat.', icon: 'fa-ship' },
            { day: 6, title: 'Departure', description: 'Transfer to Cochin Airport for your onward journey with beautiful memories.', icon: 'fa-plane-departure' }
        ]
    };

    constructor() {
        this.currentItinerary = this.allItineraries['default'];
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['destination'] && this.destination) {
            if (this.allItineraries[this.destination]) {
                this.currentItinerary = this.allItineraries[this.destination];
                this.itineraryTitle = `Itinerary for ${this.destination}`;
                this.itinerarySubtitle = `A perfect plan to explore ${this.destination}`;
            } else {
                this.currentItinerary = this.allItineraries['default'];
                this.itineraryTitle = 'Highlights of Kerala';
                this.itinerarySubtitle = 'A suggested 6-Day Plan to experience the best of Kerala';
            }
        }
    }
}
