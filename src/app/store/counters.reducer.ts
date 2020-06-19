import {createReducer, on, Action} from '@ngrx/store';
import {addCounter, removeCounter} from './counters.actions';
import {CountersStoreState} from './counters.selectors';

export const initialState: CountersStoreState = {};

const _countersReducer = createReducer(
  initialState,
  on(addCounter,
    (state: CountersStoreState, {counterId}) =>
      ({...state, [counterId]: {id: counterId}})
  ),
  on(removeCounter,
     (state: CountersStoreState, {counterId}) => {
       const {[counterId]: _removed, ...newState} = state;
       return newState;
     })

);

export function countersReducer(state: CountersStoreState, action: Action) {
  return _countersReducer(state, action);
}
