import { TestBed, inject } from '@angular/core/testing';
import { AuthguardService } from './authguard.service';


describe('auth-module -> Authguard Service Unit testing', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthguardService]
    });
  });

  it('Auth Guard service should be created', inject([AuthguardService], (service: AuthguardService) => {
    expect(service).toBeTruthy();
  }));


  it('Auth Guard should return true', inject([AuthguardService], (service: AuthguardService) => {
    expect(service.canActivate()).toBeTruthy();
  }));
});
