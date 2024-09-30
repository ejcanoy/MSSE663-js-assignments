import { Routes } from '@angular/router';
import { PizzaAppComponent } from './pizza-app/pizza-app.component';
import { HomeComponent } from './home/home.component';


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
