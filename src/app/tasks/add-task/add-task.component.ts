import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  task = { title: '', description: '' };

  constructor(private service: TaskService) {}

  // * CREATE A NEW TASK
  addTask(): void {
    console.log(this.task.title, this.task.description);
    this.service.addTask(this.task.title, this.task.description);
  }
}
