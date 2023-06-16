import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { noguardUserGuard } from './noguard-user.guard';

describe('noguardUserGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => noguardUserGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
