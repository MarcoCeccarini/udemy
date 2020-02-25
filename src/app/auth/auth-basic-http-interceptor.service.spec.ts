import { TestBed } from '@angular/core/testing';

import { AuthBasicHttpInterceptorService } from './auth-basic-http-interceptor.service';

describe('AuthBasicHttpInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthBasicHttpInterceptorService = TestBed.get(AuthBasicHttpInterceptorService);
    expect(service).toBeTruthy();
  });
});
