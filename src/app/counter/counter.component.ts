import {
  Component, 
  OnInit,
  Input,
} from '@angular/core';
import {CounterDataPlus, CounterStore} from '../counter-store';
import {removeCounter} from '../store/counters.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input()
  counter: CounterDataPlus;

  constructor(
    private counterStore: CounterStore
  ) { }

  ngOnInit(): void {
  }

  removeCounter() {
    this.counterStore.dispatch(removeCounter(this.counter.id));
  }

}
