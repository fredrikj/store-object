import {Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';

export class CounterApi {
  value$: Observable<number>;
  private createdAt: number;
  constructor() {
    this.createdAt = Date.now();
    this.value$ = timer(0, 1000).pipe(
      map(() => Math.floor((Date.now() - this.createdAt) / 1000))
    );
  }
}
