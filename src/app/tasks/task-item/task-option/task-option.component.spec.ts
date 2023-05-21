import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskOptionComponent } from './task-option.component';

describe('TaskOptionComponent', () => {
  let component: TaskOptionComponent;
  let fixture: ComponentFixture<TaskOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskOptionComponent]
    });
    fixture = TestBed.createComponent(TaskOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
