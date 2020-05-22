import { TestBed } from '@angular/core/testing';

import { CounterStore } from './counter-store';

describe('CounterFactoryService', () => {
  let service: CounterStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
