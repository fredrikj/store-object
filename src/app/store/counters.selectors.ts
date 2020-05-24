import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CounterApi} from '../counter-api';

export const CountersKey = 'counters';

export interface AppState {
  [CountersKey]: CountersState;
}

export interface CountersState {
  [counterId: string]: CounterData;
}

export interface CounterData {
  id: string;
}


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

let apis: CounterApis = {};

function removeSurplus(needed: CountersStatePlus) {
  const surplus = Object.keys(apis).filter(a => !Object.keys(needed).includes(a));
  surplus.forEach((val) => {
    apis = removeProperty(val)(apis);
  });
  console.log(`I have APIs ${Object.keys(apis)}`);
  return needed;
}

export const counters = createFeatureSelector<AppState, CountersState>(CountersKey);

export const countersWithAPI = createSelector(
  counters,
  (counterState: CountersState) =>
    removeSurplus(
      Object.entries(counterState).reduce(
        (newObject, [key, val]) => {
          apis[key] = apis[key] || new CounterApi();
          return {
            ...newObject,
            [key]: {
              ...val,
              api: apis[key]
            }
          };
        }, {})
    )
);

export const countersWithAPIArray = createSelector(
  countersWithAPI,
  (counters: CountersStatePlus) => Object.values(counters)
);
