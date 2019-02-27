import { TestBed, inject } from '@angular/core/testing';
import { HttpService } from './http.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Router} from '@angular/router';

describe('HttpService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService,  {provide: Router}]
    });
  });

  it('should be created', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));

  it('Should have a GET method', inject([HttpService], (service: HttpService) => {
    expect(service.httpGet).toBeDefined();
  }));

  it('should have a POST method', inject([HttpService], (service: HttpService) => {
    expect(service.httpPost).toBeDefined();
  }));

  it('should have a PUT method', inject([HttpService], (service: HttpService) => {
    expect(service.httpPut).toBeDefined();
  }));

  it('should have a DELETE method', inject([HttpService], (service: HttpService) => {
    expect(service.httpDelete).toBeDefined();
  }));

  it('should return an observable', inject([HttpService], (service: HttpService) => {
    const dummyTask = [
      { name: 'TEST TASK' }
    ];
    service.httpGet('/tasks', '1').subscribe(task => {
      expect(task.length).toBe(1);
      expect(task).toEqual(dummyTask);
    });
  }));

});
