import {
  Component,
  OnInit
} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {
  addCounter,
  removeCounter
} from './store/counters.actions';
import {CounterFactoryService} from './counter-factory.service';
import {CounterApi} from './counter-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  countersArray$: Observable<CounterApi[]>;

  private counterId = 0;

  constructor(
    private store: Store<{counters: number[]}>,
    private counterFactory: CounterFactoryService
  ) {
  }

  ngOnInit(): void {
    this.countersArray$ = this.counterFactory.countersArray$;
  }

  addCounter() {
    this.store.dispatch(addCounter((this.counterId++).toString()));
  }

  removeCounter() {
    this.store.dispatch(removeCounter((this.counterId--).toString()));
  }

}
