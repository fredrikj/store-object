import {
  Component, 
  OnInit,
  Input,
} from '@angular/core';
import {CounterDataPlus, CounterStore} from '../counter-store';

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
    this.counterStore.removeCounter(this.counter.id);
  }

}
