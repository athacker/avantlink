import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskRoutingModule } from './task-routing.module';
import {HomeComponent} from './components/home/home.component';
import {TaskComponent} from './components/task/task.component';
import {TaskResolverService} from './services/task-resolver.service';
import {TaskListComponent} from './components/task-list/task-list.component';
import {MaterialModule} from '../material-module/material.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TaskRoutingModule
  ],
  declarations: [HomeComponent, TaskListComponent, TaskComponent],
  providers: [TaskResolverService]
})
export class TaskModule { }
