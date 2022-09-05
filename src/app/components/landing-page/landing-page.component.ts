import { Component } from '@angular/core';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
	oldWay: string[];
	newWay: string[];

	constructor() {
		this.oldWay = [
			'Rely on unpredictable client referral.', 
			'Spends hours sifting through job boards.', 
			'Share 30% of your paycheck with a platform.', 
			'Give up control of your client relationship'
		];

		this.newWay = [
			'Enjoy predictable leads every weekday.', 
			'Focus on work you actually enjoy, not lead generation.',
			'Keep 100% of your clients paychecks.', 
			'Maintain full control of your client relationship.'
		];
	}
}
