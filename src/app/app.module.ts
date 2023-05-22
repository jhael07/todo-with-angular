import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskItemComponent } from './tasks/task-item/task-item.component';
import { TaskOptionComponent } from './tasks/task-item/task-option/task-option.component';
import { TaskCounterComponent } from './tasks/task-counter/task-counter.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { TaskService } from './services/task.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskItemComponent,
    TaskOptionComponent,
    TaskCounterComponent,
    AddTaskComponent,
    NavbarComponent,
    SigninComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
