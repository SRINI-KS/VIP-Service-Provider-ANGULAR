import { TestBed } from '@angular/core/testing';

import { ValRegisterService } from './val-register.service';

describe('ValRegisterService', () => {
  let service: ValRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
