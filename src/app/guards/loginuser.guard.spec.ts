import { TestBed } from '@angular/core/testing';

import { LoginuserGuard } from './loginuser.guard';

describe('LoginuserGuard', () => {
  let guard: LoginuserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginuserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
