import { Component, OnInit } from '@angular/core';
import {CounterApi} from './counter-api';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {addCounter, removeCounter} from './store/counters.actions';
import {counterIDs} from './store/counters.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counters$: Observable<number[]>;
  constructor(private store: Store<{counters: number[]}>) {
  }
  counters: CounterApi[];
  ngOnInit(): void {
    this.counters = [
      new CounterApi(),
      new CounterApi()
    ];
    this.counters$ = this.store.select(counterIDs);
  }

  addCounter() {
    this.store.dispatch(addCounter());
  }
  removeCounter() {
    this.store.dispatch(removeCounter());
  }
}
