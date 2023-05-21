import { Component, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-option',
  templateUrl: './task-option.component.html',
  styleUrls: ['./task-option.component.css'],
})
export class TaskOptionComponent {
  @Input() index?: number;

  constructor(private service: TaskService) {}

  deleteTask(index: number) {
    const arrOriginal = this.service.tasks;
    const newArr = arrOriginal.splice(index, index - 1);

    this.service.tasks = newArr;
  }
}
