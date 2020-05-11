import {
  Component, 
  OnInit,
  Input,
} from '@angular/core';
import {CounterApi} from '../counter-api';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input()
  counter: CounterApi;

  @Input()
  name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
