import {
  Component,
  OnInit
} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {addCounter} from './store/counters.actions';
import {CounterFactoryService, CounterDataPlus} from './counter-factory.service';
import {randomName} from './randomname';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  countersArray$: Observable<CounterDataPlus[]>;

  constructor(
    private store: Store<{counters: number[]}>,
    private counterFactory: CounterFactoryService
  ) {
  }

  ngOnInit(): void {
    this.countersArray$ = this.counterFactory.countersArray$;
  }

  addCounter() {
    this.store.dispatch(addCounter(randomName()));
  }

}
