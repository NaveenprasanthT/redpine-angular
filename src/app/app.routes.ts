import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MensWearComponent } from './mens-wear/mens-wear.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LadiesWearComponent } from './ladies-wear/ladies-wear.component';
import { ChildWearComponent } from './child-wear/child-wear.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'mens-wear', component: MensWearComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'ladies-wear', component: LadiesWearComponent },
  { path: 'child-wear', component: ChildWearComponent }
];
