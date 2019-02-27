import { TestBed, inject } from '@angular/core/testing';

import { TaskResolverService } from './task-resolver.service';
import {HttpService} from '../../core-module/services/http.service';




class MockHttpService {
}


describe('Task Resolver Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskResolverService,
        {provide: HttpService, useClass: MockHttpService}]
    });
  });

  it('should be created', inject([TaskResolverService], (service: TaskResolverService) => {
    expect(service).toBeTruthy();
  }));
});
