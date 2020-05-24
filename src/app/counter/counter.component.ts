import {
  Component, 
  OnInit,
  Input,
} from '@angular/core';
import {removeCounter} from '../store/counters.actions';
import {Store} from '@ngrx/store';
import {CounterDataPlus} from '../store/counters.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input()
  counter: CounterDataPlus;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  removeCounter() {
    this.store.dispatch(removeCounter(this.counter.id));
  }

}
