import { Component, OnInit } from '@angular/core';
import {CounterApi} from './counter-api';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  a$: Observable<number>;
  b$: Observable<number>;
  ngOnInit(): void {
    this.a$ = new CounterApi().value$;
    this.b$ = new CounterApi().value$;
  }
}
