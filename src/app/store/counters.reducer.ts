import {createReducer, on, Action} from '@ngrx/store';
import {addCounter, removeCounter} from './counters.actions';
import {CountersState} from './counters.selectors';

export const initialState: CountersState = {};

const _countersReducer = createReducer(
  initialState,
  on(addCounter,
    (state: CountersState, {counterId}) =>
      ({...state, [counterId]: counterId})
  ),
  on(removeCounter,
     (state: CountersState, {counterId}) => {
       const {[counterId]: _removed, ...newState} = state;
       return newState;
     })

);

export function countersReducer(state: CountersState, action: Action) {
  return _countersReducer(state, action);
}
