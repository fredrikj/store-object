import {Injectable} from '@angular/core';
import {
  Store,
  select
} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CounterApi} from './counter-api';
import {
  counterIDs,
  AppState,
  CountersState
} from './store/counters.selectors';

export interface CounterApis {
  [id: string]: CounterApi;
}

@Injectable({
  providedIn: 'root'
})
export class CounterFactoryService {

  private counters: CounterApis = {};

  constructor(private store: Store<AppState>) {
  }

  public counters$: Observable<CounterApis> =
    this.store.pipe(
      select(counterIDs),
      map((counterState: CountersState) =>
        Object.keys(counterState).reduce(
          (newObject, key) => {
            this.counters[key] = this.counters[key] || new CounterApi();
            return {
              ...newObject,
              [key]: this.counters[key]
            };
          }, {})
      )
    );

  public countersArray$: Observable<CounterApi[]> =
    this.counters$.pipe(
      map((counters: CounterApis) => Object.values(counters))
    )

}
