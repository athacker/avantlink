import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthguardService} from './auth-module/services/authguard.service';

const routes: Routes = [{
  path: '',
  canActivate: [AuthguardService],
  loadChildren: './task-module/task.module#TaskModule'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
