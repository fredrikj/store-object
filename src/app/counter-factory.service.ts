import {Injectable} from '@angular/core';
import {
  Store,
  select
} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
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

const removeProperty = (prop: string) => ({[prop]: _, ...rest}) => rest

@Injectable({
  providedIn: 'root'
})
export class CounterFactoryService {

  private apis: CounterApis = {};

  constructor(private store: Store<AppState>) {
  }

  private removeSurplus(needed: string[]) {
    const surplus = Object.keys(this.apis).filter( a => !needed.includes(a));
    surplus.forEach((val) => {
      this.apis = removeProperty(val)(this.apis);
    });
    console.log(`I have APIs ${Object.keys(this.apis)}`);
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
      ),
      tap((counterState: CountersStatePlus) =>
        this.removeSurplus(Object.keys(counterState))
      )
    );

  public countersArray$: Observable<CounterDataPlus[]> =
    this.counters$.pipe(
      map((counters: CountersStatePlus) => Object.values(counters))
    )

}
