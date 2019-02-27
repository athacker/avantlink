import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../../core-module/services/http.service';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {


  frmGroup: FormGroup;
  mode = 'Add New Task';
  taskId: string;
  taskName: string;
  taskIdControl: FormControl;
  taskNameControl: FormControl;


  constructor(@Inject(MAT_DIALOG_DATA) public data, public snackBar: MatSnackBar, private httpService: HttpService) {

    if (data.row) {
      this.taskId = data.row.task_id;
      this.taskName = data.row.task_name;
      this.mode = 'Edit Task';
    }
  }

  ngOnInit() {
    this.initFormControls();
    this.onChanges();
  }

  initFormControls() {
    const self = this;

    self.taskIdControl = new FormControl(self.taskId);
    self.taskNameControl = new FormControl(self.taskName, [Validators.required, Validators.minLength(5)]);

    self.frmGroup = new FormGroup({
      taskIdControl: self.taskIdControl,
      taskNameControl: self.taskNameControl
    }, {
      updateOn: 'blur'
    });
  }

  onChanges(): void {
    this.taskNameControl.valueChanges.subscribe(val => {
      if (this.taskNameControl.invalid) {
        this.openSnackBar('Task cannot be blank and must have at least 5 characters.', 'Invalid Task');
      }
    });
  }

  save() {
    const body = {
      'name': this.taskNameControl.value
    }
    if (!this.taskId) {
      this.httpService.httpPost('tasks', body).subscribe((response) => {
        console.log(response);
      });
    } else {
      this.httpService.httpPut('tasks', this.taskIdControl.value, body).subscribe((response) => {
        console.log(response);
      });
    }
  }


  openSnackBar(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.panelClass = ['custom-class-err'];
    config.duration = 2000;

    this.snackBar.open(message, action, config);
  }
}
