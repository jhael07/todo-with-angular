import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-counter',
  templateUrl: './task-counter.component.html',
  styleUrls: ['./task-counter.component.css'],
})
export class TaskCounterComponent {
  constructor(private service: TaskService) {}

  getAllTasks(): number {
    return this.service.tasks.length;
  }

  getTasksDone(): string {
    // * 👇 get the task and filter them by the status to check if is pending or not
    const arrTasks: Array<object> = this.service.tasks.filter(
      (task) => task.status !== false
    );

    // * 👇 get the result from the array filtered
    const result: string = String(arrTasks.length).padStart(2, '0');

    return result;
  }

  getTasksPending(): string {
    // * 👇 get the task and filter them by the status to check if is pending or not
    const arrTasks: Array<object> = this.service.tasks.filter(
      (task) => task.status === false
    );

    // * 👇 get the result from the array filtered
    const result: string = String(arrTasks.length).padStart(2, '0');

    return result;
  }
}
