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
	}

    rating(r: number): number[] {
		return Array(r);
	}
}
