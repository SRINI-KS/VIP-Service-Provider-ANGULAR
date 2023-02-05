import { TestBed } from '@angular/core/testing';

import { SpringRegisterService } from './spring-register.service';

describe('SpringRegisterService', () => {
  let service: SpringRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpringRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
