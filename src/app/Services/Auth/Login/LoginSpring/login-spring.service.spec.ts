import { TestBed } from '@angular/core/testing';

import { LoginSpringService } from './login-spring.service';

describe('LoginSpringService', () => {
  let service: LoginSpringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginSpringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
