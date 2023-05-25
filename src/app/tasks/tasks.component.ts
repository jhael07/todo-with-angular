import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  constructor(private TaskService: TaskService) {
    if (localStorage.getItem('session')) {
      this.getUserTasks();
    }
  }

  tasks = this.TaskService.tasks;

  getUserTasks() {
    const userTasks = localStorage.getItem('tasks');
    if (userTasks) {
      let tasksArr = JSON.parse(userTasks);

      if (tasksArr.length > 1) {
        this.tasks.shift();
        this.tasks.push(...tasksArr);
      }
    }
  }
}
