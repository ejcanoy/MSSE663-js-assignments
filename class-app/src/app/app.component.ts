import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PizzaAppComponent } from './pizza-app/pizza-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PizzaAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Hello World!';
}
