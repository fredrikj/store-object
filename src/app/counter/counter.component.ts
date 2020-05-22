import {
  Component, 
  OnInit,
  Input,
} from '@angular/core';
import {CounterDataPlus} from '../counter-factory.service';
import {Store} from '@ngrx/store';
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
    private store: Store<{counters: number[]}>,
  ) { }

  ngOnInit(): void {
  }

  removeCounter() {
    this.store.dispatch(removeCounter(this.counter.id));
  }

}
