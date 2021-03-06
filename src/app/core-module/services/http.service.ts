import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {environment} from '../../../environments/environment.prod';
import {Task} from '../../task-module/models/task';

@Injectable()
export class HttpService {

  private API = environment.homework_api;

  options = {
    headers: {
      'application-ID': environment.application_id
    }
  };


  constructor(private http: HttpClient, private router: Router) {
  }


  httpGet(endpoint, recordId): Observable<any> {
    const self = this;

    let api = `${self.API}/${endpoint}`;

    if (recordId) {
      api = `${api}/${recordId}`;
    }

    return self.http.get<any>(api, self.options).catch(self.errorHandler);
  }


  httpPut(endpoint, recordId, data): Observable<any> {
    const self = this;
    let api = `${self.API}/${endpoint}`;

    if (recordId) {
      console.log('Unique record id is often required for single row updates (PUTs) ');
      api = `${api}/${recordId}`;
    }
    return self.http.put<any>(api, data, self.options).catch(self.errorHandler);
  } // end httpPut


  httpDelete(endpoint, recordId): Observable<any> {
    const self = this;
    let api = `${self.API}/${endpoint}`;

    if (!recordId) {
      return new ErrorObservable('Unique record id is required for single row DELETES) ');
    }
    api = `${api}/${recordId}`;
    return self.http.delete<any>(api, self.options).catch(self.errorHandler);
  } // end httpDelete


  httpPost(endpoint, data): Observable<any> {
    const self = this;
    const api = `${self.API}/${endpoint}`;
    return self.http.post<any>(api, data, self.options).catch(self.errorHandler);
  } // end httpPost


  private errorHandler(error, caught) {
    console.log('An http error occurred:');
    console.log(`error: `, error);
    console.log(`caught: `, caught);
    const customMessage = error.error.errCode || '';
    const customErrorObj = {
      code: error.status || 0,
      text: error.statusText || '',
      compositeMessage: (error.error && error.message) || '',
      customMessage: 'Exception was caught performing CRUD operations'
    };
    console.log(customErrorObj.customMessage);
    return new ErrorObservable(customErrorObj);
  } // errorHandler


}
