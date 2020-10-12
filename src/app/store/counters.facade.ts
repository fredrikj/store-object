import {Injectable} from "@angular/core";
import {createSelector, Store, Action} from '@ngrx/store';
import {storeCounters, CountersStoreState, CounterStoreData} from './counters.selectors';
import {CounterApi, ApiProperties} from '../counter-api';

interface CounterApis {
  [counterId: string]: CounterApi;
}

export interface Counters {
  [counterId: string]: CounterData;
}

export interface CounterData extends CounterStoreData, ApiProperties {}

const removeProperty = (prop: string) => (({[prop]: _, ...rest}) => rest);

@Injectable({
  providedIn: 'root'
})
export class CountersFacade {
  private apis: CounterApis = {};

  private readonly countersSelector = createSelector(
    storeCounters,
    (countersState: CountersStoreState) => {
      const counters: Counters = Object.entries(countersState).reduce(
        (newObject, [key, val]) => {
          this.apis[key] = this.apis[key] || new CounterApi();
          return {
            ...newObject,
            [key]: {
              ...val,
              ...this.apis[key].properties
            }
          };
        }, {}
      );
      this.removeSurplus(counters);
      return counters;
    }
  );

  private readonly countersArraySelector = createSelector(
    this.countersSelector,
    (counters: Counters) => Object.values(counters)
  );

  public readonly countersArray$ = this.store.select(this.countersArraySelector);

  public dispatch(action: Action) {
    this.store.dispatch(action);
  }

  private removeSurplus(needed: Counters) {
    const surplus = Object.keys(this.apis).filter(a => !Object.keys(needed).includes(a));
    surplus.forEach((val) => {
      this.apis = removeProperty(val)(this.apis);
    });
    console.log(`I have APIs ${Object.keys(this.apis)}`);
    return needed;
  }

  constructor(private store: Store) {}

}
