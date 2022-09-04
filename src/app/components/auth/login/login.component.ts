import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	theForm: FormGroup;

	constructor() {
		this.theForm = new FormGroup({
			email: new FormControl(''),
			password: new FormControl('')
		});
	}
}
