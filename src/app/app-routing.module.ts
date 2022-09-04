import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';

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
