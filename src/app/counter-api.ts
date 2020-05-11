import {interval, Observable} from 'rxjs';

export class CounterApi {
  value$: Observable<number>;
  constructor() {
    this.value$ = interval(1000);
  }
}
