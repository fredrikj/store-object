import { Component, OnInit } from '@angular/core';
import {CounterApi} from './counter-api';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {addCounter, removeCounter} from './store/counters.actions';
import {CounterFactoryService} from './counter-factory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counters$: Observable<CounterApi[]>;

  constructor(
    private store: Store<{counters: number[]}>,
    private counterFactory: CounterFactoryService
  ) {
  }
  ngOnInit(): void {
    this.counters$ = this.counterFactory.counters$;
  }

  addCounter() {
    this.store.dispatch(addCounter());
  }
  removeCounter() {
    this.store.dispatch(removeCounter());
  }
}
