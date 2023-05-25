import { Component, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-option',
  templateUrl: './task-option.component.html',
  styleUrls: ['./task-option.component.css'],
})
export class TaskOptionComponent {
  @Input() index?: number;
  @Input() status?: boolean;

  constructor(private service: TaskService) {}

  // * 👇 Esta funcion llama a completeTask que pertenece a TaskService
  completeTaskService(): void {
    this.service.completeTask(this.index);
  }

  // * 👇 Esta funcion llama a deleteTask que pertenece a TaskService
  deleteTaskService(): void {
    this.service.deleteTask(this.index);
    const userTasks = localStorage.getItem('tasks');
    if (userTasks) {
      if (this.index) {
        this.service.tasks.splice(this.index, 0);
        localStorage.setItem('tasks', JSON.stringify(this.service.tasks));
      }
    }
  }
}
