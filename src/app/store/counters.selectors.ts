import {createFeatureSelector} from '@ngrx/store';

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

export const counters = createFeatureSelector<AppState, CountersState>(CountersKey);
