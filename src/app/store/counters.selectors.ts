import {createFeatureSelector} from '@ngrx/store';

export const CountersKey = 'counters';

export interface AppState {
  [CountersKey]: CountersState;
}

export interface CountersState {
  [counterId: string]: string;
}

export const counterIDs = createFeatureSelector<AppState, CountersState>(CountersKey);
