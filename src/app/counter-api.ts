import {Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';

export interface ApiProperties {
  countedValue$: Observable<number>;
}

export class CounterApi {
  private createdAt: number = Date.now();
  public properties: ApiProperties = {
    countedValue$: timer(0, 1000).pipe(
      map(() => Math.floor((Date.now() - this.createdAt) / 1000))
    )
  };
}
