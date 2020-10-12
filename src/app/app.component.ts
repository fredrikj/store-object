import {
  Component,
  OnInit
} from '@angular/core';
import {Observable} from 'rxjs';
import {randomName} from './randomname';
import {addCounter} from './store/counters.actions';
import {CountersFacade, CounterData} from './store/counters.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  countersArray$: Observable<CounterData[]>;

  constructor(
    private countersFacade: CountersFacade
  ) {
  }

  ngOnInit(): void {
    this.countersArray$ = this.countersFacade.countersArray$;
  }

  addCounter() {
    this.countersFacade.dispatch(addCounter(randomName()));
  }

  trackById(_index: number, counter: CounterData): string {
    return counter.id;
  }
}
