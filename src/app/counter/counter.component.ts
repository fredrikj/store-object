import {
  Component, 
  OnInit,
  Input,
} from '@angular/core';
import {CounterDataPlus, CounterFactoryService} from '../counter-factory.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input()
  counter: CounterDataPlus;

  constructor(
    private counterFactory: CounterFactoryService
  ) { }

  ngOnInit(): void {
  }

  removeCounter() {
    this.counterFactory.removeCounter(this.counter.id);
  }

}
