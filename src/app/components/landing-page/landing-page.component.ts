import { Component } from '@angular/core';
import { Review } from 'src/app/models/models';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
	reviews: Review[];
	oldWay: string[];
	newWay: string[];

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
	}

    rating(r: number): number[] {
		return Array(r);
	}
}
