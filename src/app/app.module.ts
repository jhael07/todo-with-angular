import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskItemComponent } from './tasks/task-item/task-item.component';
import { TaskOptionComponent } from './tasks/task-item/task-option/task-option.component';
import { TaskCounterComponent } from './tasks/task-counter/task-counter.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { TaskService } from './services/task.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskItemComponent,
    TaskOptionComponent,
    TaskCounterComponent,
    AddTaskComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
