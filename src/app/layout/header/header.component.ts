import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	isOpen = false;
	constructor() { }

	onToggleMenu(): void {
		this.isOpen = !this.isOpen;
	}

	onNavItemClick(): void {
		this.isOpen = false;
		console.log(this.isOpen)
	}
}
