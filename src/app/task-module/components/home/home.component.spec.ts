import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterTestingModule} from '@angular/router/testing';
import {Component, NgModule} from '@angular/core';



@Component({
  template: ''
})
class MockLoginComponent { }

@NgModule({
  declarations: [MockLoginComponent],
  exports:      [MockLoginComponent]
})
class MockModule { }



describe('Home Component', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [],
      imports: [
        MockModule,
        RouterTestingModule.withRoutes([
        {
          path: 'task',
          component: MockLoginComponent
        }
      ])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
