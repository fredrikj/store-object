import { Component, OnInit } from '@angular/core';
import {CounterApi} from './counter-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counters: CounterApi[];
  ngOnInit(): void {
    this.counters = [
      new CounterApi(),
      new CounterApi()
    ];
  }
}
