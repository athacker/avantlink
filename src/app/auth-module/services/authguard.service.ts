import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable()
export class AuthguardService implements CanActivate {

  constructor() {
  }

  canActivate(): boolean {
    console.log('@TODO -- wire in security.');
    return true;
  }
}
