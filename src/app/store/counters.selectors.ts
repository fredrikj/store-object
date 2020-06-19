import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CounterApi, ApiProperties} from '../counter-api';

export const CountersKey = 'counters';

export interface AppState {
  [CountersKey]: CountersStoreState;
}

export interface CountersStoreState {
  [counterId: string]: CounterStoreData;
}

export interface CounterStoreData {
  id: string;
}

export interface Counters {
  [counterId: string]: CounterData;
}

export interface CounterData extends CounterStoreData, ApiProperties {}

const removeProperty = (prop: string) => ({[prop]: _, ...rest}) => rest

interface CounterApis {
  [counterId: string]: CounterApi;
}

let apis: CounterApis = {};

function removeSurplus(needed: Counters) {
  const surplus = Object.keys(apis).filter(a => !Object.keys(needed).includes(a));
  surplus.forEach((val) => {
    apis = removeProperty(val)(apis);
  });
  console.log(`I have APIs ${Object.keys(apis)}`);
  return needed;
}

export const storeCounters = createFeatureSelector<AppState, CountersStoreState>(CountersKey);

export const counters = createSelector(
  storeCounters,
  (countersState: CountersStoreState) =>
    removeSurplus(
      Object.entries(countersState).reduce(
        (newObject, [key, val]) => {
          apis[key] = apis[key] || new CounterApi();
          return {
            ...newObject,
            [key]: {
              ...val,
              ...apis[key].properties
            }
          };
        }, {})
    )
);

export const countersArray = createSelector(
  counters,
  (counters: Counters) => Object.values(counters)
);
