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

  completeTask(index: any) {
    this.service.tasks[index].status = !this.service.tasks[index].status;
    console.log(this.service.tasks);
  }

  deleteTask(index: any) {
    const arrOriginal = this.service.tasks;
    arrOriginal.splice(index, 1);
  }
}
