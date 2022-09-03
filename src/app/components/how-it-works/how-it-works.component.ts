import { Component } from '@angular/core';


@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent {
	howItWorks: string[];

  	constructor() {
		this.howItWorks = [
			'You tell us what kind of freelance gigs you want.',
			'We search dozens of sources to find your ideal client.',
			'You get alerted when we find a good match.',
			'You send a pitch directly at the lead source.',
			'You win more of your ideal clients and grow your freelance business.'
		];
	}
}
