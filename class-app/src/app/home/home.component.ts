import { Component } from '@angular/core';
import { PizzasService } from '../shared/services/pizzas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly pizzas$;

  constructor(private pizzasService: PizzasService) {
    this.pizzas$ = this.pizzasService.getPizzas();
  }
}
