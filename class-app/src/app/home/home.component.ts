import { Component } from '@angular/core';
import { PizzasService } from '../shared/services/pizzas.service';
import { CommonModule, NgFor } from '@angular/common';
import { PizzaEntity } from '../lib/api-interfaces';
import { map, Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly pizzas$: Observable<PizzaEntity[]>;

  constructor(private pizzasService: PizzasService) {
    this.pizzas$ = this.pizzasService.getPizzas();
  }
}
