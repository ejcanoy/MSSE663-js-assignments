import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pizza-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizza-summary.component.html',
  styleUrls: ['pizza-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzaSummaryComponent {
  @Input() pizzas!: FormArray;
  @Input() total: string | null = '';
  @Input() prices: any;
}
