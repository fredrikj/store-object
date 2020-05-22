import {
  Component,
  OnInit
} from '@angular/core';
import {Observable} from 'rxjs';
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
    private counterFactory: CounterFactoryService
  ) {
  }

  ngOnInit(): void {
    this.countersArray$ = this.counterFactory.countersArray$;
  }

  addCounter() {
    this.counterFactory.addCounter(randomName());
  }

  trackById(_index: number, counter: CounterDataPlus): string {
    return counter.id;
  }
}
