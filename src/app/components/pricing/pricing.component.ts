import { Component } from '@angular/core';
import { SubscriptionType } from 'src/app/models/models';


@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
	subscriptionTypes: SubscriptionType[];

  	constructor() {
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
}
