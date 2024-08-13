import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookedComponent } from './pages/booked/booked.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"booked",
        component:BookedComponent
    }
];
