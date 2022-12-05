import { TestBed } from '@angular/core/testing';

import { PruebaGuard } from './prueba.guard';

describe('PruebaGuard', () => {
  let guard: PruebaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PruebaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
