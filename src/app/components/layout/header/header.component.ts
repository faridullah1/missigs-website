import { Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	isOpen = false;
	constructor(private router: Router) { }

	onToggleMenu(): void {
		this.isOpen = !this.isOpen;
	}

	goto(page: string, id: string | null = null): void {
		this.isOpen = false;

		if (id) {
			this.router.navigate(['/' + page], { fragment: id });
		}
		else {
			this.router.navigate(['/' + page]);
		}
	}
}
