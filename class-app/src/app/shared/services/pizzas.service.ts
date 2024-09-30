import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PizzaEntity } from '/Users/euancanoy/msse663/MSSE663-js-assignments/class-app/api/lib/api-interfaces';


interface PizzaResponse {
  msg: string;
  pizzas: PizzaEntity[];
}

@Injectable({
  providedIn: 'root',
})
export class PizzasService {
  constructor(private http: HttpClient) {}

  getPizzas(): Observable<PizzaEntity[]> {
    return this.http
      .get<PizzaResponse>('http://localhost:4000/api/pizzas/presets')
      .pipe(map((data) => data.pizzas));
  }
}