import {createFeatureSelector} from '@ngrx/store';

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

export const storeCounters = createFeatureSelector<AppState, CountersStoreState>(CountersKey);


