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
  completeTaskService(index?: number): void {
    const { completeTask } = this.service;
    completeTask(index);
  }

  // * 👇 Esta funcion llama a deleteTask que pertenece a TaskService
  deleteTaskService(index?: number): void {
    const { deleteTask } = this.service;
    deleteTask(index);
  }
}
