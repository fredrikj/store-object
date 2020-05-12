import { TestBed } from '@angular/core/testing';

import { CounterFactoryService } from './counter-factory.service';

describe('CounterFactoryService', () => {
  let service: CounterFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
