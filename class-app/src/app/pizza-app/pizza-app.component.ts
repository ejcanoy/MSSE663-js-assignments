import { Component } from '@angular/core';
import { SizePipe } from '../shared/pipes/size.pipe';

@Component({
  selector: 'app-pizza-app',
  standalone: true,
  imports: [SizePipe],
  templateUrl: './pizza-app.component.html',
  styleUrl: './pizza-app.component.scss'
})
export class PizzaAppComponent {
  prices = {
    small: { base: 9.99, size: 10 },
    meduim: { base: 11.99, size: 12 },
    large: { base: 13.99, size: 14 },
    'x-large': { base: 15.99, size: 16 },
  };
}
