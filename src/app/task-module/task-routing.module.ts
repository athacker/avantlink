import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {TaskComponent} from './components/task/task.component';
import {TaskResolverService} from './services/task-resolver.service';
import {TaskListComponent} from './components/task-list/task-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: TaskListComponent,
        resolve: {
          data: TaskResolverService
        }
      },
      {
        path: 'task',
        component: TaskComponent,
      }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
