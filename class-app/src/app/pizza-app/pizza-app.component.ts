import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/size.module';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Pizza } from '/Users/euancanoy/msse663/MSSE663-js-assignments/class-app/api/lib/api-interfaces';
import { map, startWith, Observable } from 'rxjs';
import { PizzaViewerComponent } from './components/pizza-viewer/pizza-viewer.component';
import { PizzaCreatorComponent } from './components/pizza-creator/pizza-creator.component';
import { PizzaSummaryComponent } from './components/pizza-summary/pizza-summary.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type PizzaPrice = {
  [size: string]: {
    base: number;
    size: number;
    toppings: number;
  };
};

@Component({
  selector: 'app-pizza-app',
  standalone: true,
  imports: [
    SharedModule,
    PizzaViewerComponent,
    PizzaCreatorComponent,
    PizzaSummaryComponent,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './pizza-app.component.html',
  styleUrls: ['./pizza-app.component.scss']
})
export class PizzaAppComponent implements OnInit {
  activePizza = 0;

  prices: PizzaPrice = {
    small: { base: 9.99, size: 10, toppings: 0.69 },
    medium: { base: 11.99, size: 12, toppings: 0.99 },
    large: { base: 13.99, size: 14, toppings: 1.29 },
    'x-large': { base: 15.99, size: 16, toppings: 1.59 },
  };

  pizzaForm!: FormGroup;
  total$!: Observable<string>;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.pizzaForm = this.fb.group({
      pizzas: this.fb.array([this.createPizza()]),
    });

    this.total$ = this.pizzas.valueChanges.pipe(
      startWith(this.calculateTotal(this.pizzas.value)),
      map(() => this.calculateTotal(this.pizzas.value))
    );
  }

  get pizzas(): FormArray {
    return this.pizzaForm.get('pizzas') as FormArray;
  }

  createPizza(): FormGroup {
    return this.fb.group({
      size: ['small', Validators.required],
      toppings: [[]],
    });
  }

  addPizza() {
    this.pizzas.push(this.createPizza());
  }

  removePizza(index: number) {
    this.pizzas.removeAt(index);
  }

  togglePizza(index: number) {
    this.activePizza = index;
  }

  calculateTotal(value: Pizza[]): string {
    const price = value.reduce((acc: number, next: Pizza) => {
      const price = this.prices[next.size];
      return acc + price.base + price.toppings * next.toppings.length;
    }, 0);
    return price.toFixed(2);
  }
}
