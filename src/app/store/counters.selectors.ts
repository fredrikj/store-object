import {createFeatureSelector} from '@ngrx/store';

export const CountersKey = 'counters';

export interface AppState {
  [CountersKey]: CountersState;
}

export type CountersState = number[];

export const counterIDs = createFeatureSelector<AppState, CountersState>(CountersKey);
