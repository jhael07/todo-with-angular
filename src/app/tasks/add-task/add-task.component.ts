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

  clearInputs() {
    this.task.title = '';
    this.task.description = '';
  }

  // * CREATE A NEW TASK
  addTask(): void {
    const { title, description } = this.task;

    if (!title) alert('Please fill out the title input.');
    else this.service.addTask(title, description);

    this.clearInputs();
  }
}
