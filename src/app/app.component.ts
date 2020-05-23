import {
  Component,
  OnInit
} from '@angular/core';
import {Observable} from 'rxjs';
import {CounterStore, CounterDataPlus} from './counter-store';
import {randomName} from './randomname';
import {addCounter} from './store/counters.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  countersArray$: Observable<CounterDataPlus[]>;

  constructor(
    private counterStore: CounterStore
  ) {
  }

  ngOnInit(): void {
    this.countersArray$ = this.counterStore.countersArray$;
  }

  addCounter() {
    this.counterStore.dispatch(addCounter(randomName()));
  }

  trackById(_index: number, counter: CounterDataPlus): string {
    return counter.id;
  }
}
