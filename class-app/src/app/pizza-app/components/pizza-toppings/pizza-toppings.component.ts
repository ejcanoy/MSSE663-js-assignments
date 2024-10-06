import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

export const PIZZA_TOPPINGS_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PizzaToppingsComponent),
  multi: true,
};

@Component({
  selector: 'app-pizza-toppings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.scss'],
  providers: [PIZZA_TOPPINGS_ACCESSOR],
})
export class PizzaToppingsComponent implements ControlValueAccessor {
  private onTouched!: () => void;
  private onChanged!: (value: string[]) => void;

  value: string[] = [];
  focused!: string;
  disabled = false;

  toppings: string[] = [
    'anchovy',
    'bacon',
    'basil',
    'chili',
    'mozzarella',
    'mushroom',
    'olive',
    'onion',
    'pepper',
    'pepperoni',
    'sweetcorn',
    'tomato',
  ];

  registerOnChange(fn: (value: string[]) => void) {
    this.onChanged = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  writeValue(value: string[]) {
    this.value = value || [];
  }

  updateTopping(topping: string) {
    if (this.value.includes(topping)) {
      this.value = this.value.filter((x) => topping !== x);
    } else {
      this.value.push(topping);
    }

    this.onTouched();
    this.onChanged(this.value);
  }

  onBlur() {
    this.focused = '';
  }

  onFocus(value: string) {
    this.focused = value;
    this.onTouched();
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}