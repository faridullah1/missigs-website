import { Component } from '@angular/core';
import { Review, SubscriptionType } from 'src/app/models/models';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
	reviews: Review[];
	subscriptionTypes: SubscriptionType[];
	oldWay: string[];
	newWay: string[];
	howItWorks: string[];

	constructor() {
		this.reviews = [
			{
				name: 'Ali rashidy',
				rating: 5,
				text: 'What I love about Solidgigs is they not only deliver you new leads every day, they also give you the resources you need to convert them into paying customers, all for just a fixed fee, no BS.'
			},
			{
				name: 'Ali rashidy',
				rating: 5,
				text: 'What I love about Solidgigs is they not only deliver you new leads every day, they also give you the resources you need to convert them into paying customers, all for just a fixed fee, no BS.'
			},
			{
				name: 'Ali rashidy',
				rating: 5,
				text: 'What I love about Solidgigs is they not only deliver you new leads every day, they also give you the resources you need to convert them into paying customers, all for just a fixed fee, no BS.'
			}
		];

		this.subscriptionTypes = [
			{
				ammount: 21,
				discount: 40,
				type: 'Yearly',
				selected: true
			},
			{
				ammount: 35,
				discount: 0,
				type: 'Monthly',
				selected: false
			}
		];

		this.oldWay = [
			'Rely on unpredictable client referral.', 
			'Spends hours sifting through job boards.', 
			'Share 30% of your paycheck with a platform.', 
			'Give up control of your client relationship'
		];

		this.newWay = [
			'Enjoy predictable leads every weekday.', 
			'Focus on work you actually enjog, not lead generation.',
			'Keep 100% of your clients paychecks.', 
			'Maintain full control of your client relationship.'
		];

		this.howItWorks = [
			'You tell us what kind of freelance gigs you want.',
			'We search dozens of sources to find your ideal client.',
			'You get alerted when we find a good match.',
			'You send a pitch directly at the lead source.',
			'You win more of your ideal clients and grow your freelance business.'
		];
	}

    rating(r: number): number[] {
		return Array(r);
	}
}
