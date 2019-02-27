import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {HttpService} from '../../core-module/services/http.service';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class TaskResolverService implements Resolve<Observable<any>> {

  constructor(private httpService: HttpService) { }

  resolve() {
   return this.httpService.httpGet('tasks', null);
  }
}
