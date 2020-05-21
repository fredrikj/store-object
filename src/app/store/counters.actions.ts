import {createAction} from '@ngrx/store';

export const addCounter = createAction('[Counters] Add', (counterId: string) => ({counterId}));
export const removeCounter = createAction('[Counters] Remove', (counterId: string) => ({counterId}));
