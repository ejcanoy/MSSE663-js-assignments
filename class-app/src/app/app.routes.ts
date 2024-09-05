import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PizzaAppComponent } from './pizza-app/pizza-app.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'pizzas',
        component: PizzaAppComponent,
    },
];
