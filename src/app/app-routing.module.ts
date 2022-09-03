import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },

	{ path: 'home', component: LandingPageComponent },
	{ path: 'signup', component: SignUpComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'reset-password', component: ResetPasswordComponent },
	{ path: 'forgot-password', component: ForgotPasswordComponent },
	{ path: 'complete', component: ProfileComponent },

	{ path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
