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

  addTask(): void {
    // * 👇 This alert that is trigger if the title input is not fill else it adds the task
    if (!this.task.title) alert('Please fill out the title input.');
    if (this.task) this.service.addTask(this.task.title, this.task.description);

    // * 👇 This clears the inputs if the task has been added
    this.clearInputs();
  }
}
