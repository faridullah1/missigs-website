import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
	theForm: FormGroup;

	constructor() {
		this.theForm = new FormGroup({
			password: new FormControl(''),
			confirmPassword: new FormControl('')
		});
	}
}
