import {createReducer, on, Action} from '@ngrx/store';
import {addCounter, removeCounter} from './counters.actions';

export const initialState: number[] = [];

const _countersReducer = createReducer(
  initialState,
  on(addCounter, state => [...state, state.length]),
  on(removeCounter, state => state.slice(0,state.length-1))
);

export function countersReducer(state: number[], action: Action) {
  return _countersReducer(state, action);
}
