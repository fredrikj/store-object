import {Injectable} from '@angular/core';
import {
  Store,
  select
} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CounterApi} from './counter-api';
import {
  counters,
  AppState,
  CountersState,
  CounterData
} from './store/counters.selectors';

interface CounterApis {
  [counterId: string]: CounterApi;
}

export interface CountersStatePlus {
  [counterId: string]: CounterDataPlus;
}

export interface CounterDataPlus extends CounterData {
  api: CounterApi;
}

@Injectable({
  providedIn: 'root'
})
export class CounterFactoryService {

  private apis: CounterApis = {};

  constructor(private store: Store<AppState>) {
  }

  public counters$: Observable<CountersStatePlus> =
    this.store.pipe(
      select(counters),
      map((counterState: CountersState) =>
        Object.entries(counterState).reduce(
          (newObject, [key, val]) => {
            this.apis[key] = this.apis[key] || new CounterApi();
            return {
              ...newObject,
              [key]: {
                ...val,
                api: this.apis[key]
              }
            };
          }, {})
      )
    );

  public countersArray$: Observable<CounterDataPlus[]> =
    this.counters$.pipe(
      map((counters: CountersStatePlus) => Object.values(counters))
    )

}
