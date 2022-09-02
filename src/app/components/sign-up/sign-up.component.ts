import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SubscriptionType } from 'src/app/models/models';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
	theForm: FormGroup;
	subscriptionTypes: SubscriptionType[];

	constructor(private router: Router) {
		this.theForm = new FormGroup({
			firstName: new FormControl(''),
			lastName: new FormControl(''),
			email: new FormControl(''),
			password: new FormControl(''),
			confirmPassword: new FormControl(''),

			subscription: new FormControl(''),

			paymentInfo: new FormGroup({
				cardName: new FormControl(''),
				cardNumber: new FormControl(''),
				expiryDate: new FormControl(''),
				cvv: new FormControl(''),
			}),

			termOfUse: new FormControl(false),
			newsLetter: new FormControl(false),
		});

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

	onSubscriptionChange(subs: SubscriptionType): void {
		for (let s of this.subscriptionTypes) {
			s.selected = false;
		}

		subs.selected = true;
	}

	onSignUp(): void {
		this.router.navigateByUrl('/complete');
	}
}
