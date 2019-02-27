import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../../../core-module/services/http.service';
import {MatDialog, MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {TaskComponent} from '../task/task.component';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tableColumns: string[] = ['task_name', 'task_id' ];
  dataSource = [];

  constructor(private route: ActivatedRoute, public dialog: MatDialog, public snackBar: MatSnackBar, private httpService: HttpService) {
  }

  ngOnInit() {
    if (this.route.data) {
      this.route.data.subscribe(({data}) => {
        this.dataSource = data.data;
      }, ({error}) => {
          console.log('An Exception was caught setting up material data table source. ' + error);
      });
    }
  }


  delete(task_id) {
    this.httpService.httpDelete('tasks', task_id).subscribe((response) => {
      if (response.success) {
        this.openSnackBar('Record was deleted..', 'Success');
        this.refreshGrid();
      } else {
        this.openSnackBar('Record was not deleted..', 'Failure');
      }
    });
  }


  refreshGrid() {
    this.httpService.httpGet('tasks', null).subscribe((response) => {
      this.dataSource = response.data;
    });
  }


  async add() {
    const dialogRef = this.dialog.open(TaskComponent, {
      height: '300px',
      width: '400px',
      data: {mode: 'Add Record'}
    });
    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.refreshGrid();
        this.openSnackBar('Additions were saved.', 'Success');
        console.log('Close EDIT Modal --  persist data.');
        return;
      } else {
        this.openSnackBar('No Tasks were added.', 'Cancel');
      }
    });
  }

  /**
   * queries form service for grid record to edit
   * @param record.childApplicationInstanceId, record.applicationUuid, record.sectionUuid
   */
  async edit(record) {
    const self = this;

    const dialogRef = this.dialog.open(TaskComponent, {
      height: '300px',
      width: '400px',
      data: {mode: 'Edit Record', row: record}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.refreshGrid();
        this.openSnackBar('Edits were saved.', 'Success');
        return;
      } else {
        this.openSnackBar('No Edits were saved.', 'Cancel');
      }
    });
  }




  openSnackBar(message: string, action: string) {
    const config = new MatSnackBarConfig();

    if ('Success' === action) {
      config.panelClass = ['custom-class-success'];
    } else if ('Cancel' === action) {
      config.panelClass = ['custom-class-cancel'];
    } else {
      config.panelClass = ['custom-class-err'];
    }

    config.duration = 2000;

    this.snackBar.open(message, action, config);
  }


}
