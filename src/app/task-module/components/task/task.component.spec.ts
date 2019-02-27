import {async, ComponentFixture, fakeAsync, inject, TestBed} from '@angular/core/testing';
import {TaskComponent} from './task.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../material-module/material.module';
import {MAT_DIALOG_DATA} from '@angular/material';
import {HttpService} from '../../../core-module/services/http.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

class MockHttpService {
}

describe('Task Component', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let rendered: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskComponent],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: HttpService, useClass: MockHttpService}],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    rendered = fixture.debugElement;
  });


  it('Task Component should be created.', () => {
    expect(component).toBeTruthy();
  });


  it('expect task field to be invalid', () => {
    let errors = {};
    const taskField = component.frmGroup.controls['taskNameControl'];
    taskField.setValue(null);
    errors = taskField.errors || {};
    expect(errors['required']).toBeTruthy();
  });


  it('Update Button should be disabled.', () => {
    let errors = {};
    const taskField = component.frmGroup.controls['taskNameControl'];
    taskField.setValue(null);
    errors = taskField.errors || {};
    const element = rendered.query(By.css('#update'));
    expect(element.properties.disabled).toBeTruthy();
  });


  it('expect task field to be Valid', () => {
    let errors = {};
    const taskField = component.frmGroup.controls['taskNameControl'];
    taskField.setValue('My Brand New task!!');
    errors = taskField.errors || {};
    expect(errors['required']).toBeFalsy();
  });


  it('Expect Http-Service GET ALL to have been called. ', () => fakeAsync(
    inject([HttpService], (httpService: HttpService) => {
      const button = fixture.debugElement.nativeElement.querySelector('button');
      button.click();
      fixture.whenStable().then(() => {
        expect(httpService.httpPost).toHaveBeenCalled();
      });
    })));


});
