import {
  Component,
  OnInit
} from '@angular/core';
import {Observable} from 'rxjs';
import {randomName} from './randomname';
import {addCounter} from './store/counters.actions';
import {Store} from '@ngrx/store';
import {countersWithAPIArray, CounterDataWithAPI} from './store/counters.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  countersArray$: Observable<CounterDataWithAPI[]>;

  constructor(
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.countersArray$ = this.store.select(countersWithAPIArray);
  }

  addCounter() {
    this.store.dispatch(addCounter(randomName()));
  }

  trackById(_index: number, counter: CounterDataWithAPI): string {
    return counter.id;
  }
}
