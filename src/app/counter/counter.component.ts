import {
  Component, 
  OnInit,
  Input,
} from '@angular/core';
import {removeCounter} from '../store/counters.actions';
import {CounterData, CountersFacade} from '../store/counters.facade';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input()
  counter: CounterData;

  constructor(
    private countersFacade: CountersFacade
  ) { }

  ngOnInit(): void {
  }

  removeCounter() {
    this.countersFacade.dispatch(removeCounter(this.counter.id));
  }

}
