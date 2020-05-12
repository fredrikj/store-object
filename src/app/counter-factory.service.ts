import { Injectable } from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CounterApi} from './counter-api';
import {counterIDs} from './store/counters.selectors';

@Injectable({
  providedIn: 'root'
})
export class CounterFactoryService {

  private counters: CounterApi[] = [];

  constructor(private store: Store<{counters: number[]}>) {
  }

  public counters$: Observable<CounterApi[]> =
    this.store.pipe(
      select(counterIDs),
      map((ids: number[]) => 
          ids.map((id: number) => {
            this.counters[id] = this.counters[id] || new CounterApi();
            return this.counters[id];
          })
         )
  );

}
