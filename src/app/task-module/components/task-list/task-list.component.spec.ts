import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TaskListComponent} from './task-list.component';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {MaterialModule} from '../../../material-module/material.module';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {HttpService} from '../../../core-module/services/http.service';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {AppComponent} from '../../../app.component';


export class ActivatedRouteMock {
  public paramMap = of(convertToParamMap({
    data: []
  }));
}

class MockHttpService {

}


describe('Task List Component', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListComponent],
      providers: [
        {provide: ActivatedRoute, useClass: ActivatedRouteMock},
        {provide: HttpService, useClass: MockHttpService}
      ],
      imports: [MaterialModule]
    })
      .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Task List should be create', () => {
    expect(component).toBeTruthy();
  });


  it(`should have table columns!!`, async(() => {
    const fixture = TestBed.createComponent(TaskListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.tableColumns).toEqual(['task_id', 'task_name']);
  }));


  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(TaskListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('My Tasks');
  }));




});
