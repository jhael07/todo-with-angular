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
  }
}
