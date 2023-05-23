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
    const session = localStorage.getItem('session');

    // * 👇 This alert that is trigger if the title input is not fill else it adds the task
    if (!this.task.title) alert('Please fill out the title input.');
    if (this.task) this.service.addTask(this.task.title, this.task.description);

    if (session) {
      const userTasks = localStorage.getItem('tasks');
      let tasksArr: object[];

      if (userTasks) {
        tasksArr = JSON.parse(userTasks);
        tasksArr.push({
          title: this.task.title,
          description: this.task.description,
          status: false,
        });
        localStorage.setItem('tasks', JSON.stringify(tasksArr));
      } else {
        localStorage.setItem(
          'tasks',
          JSON.stringify([
            {
              title: this.task.title,
              description: this.task.description,
              status: false,
            },
          ])
        );
      }
    }
    // * 👇 This clears the inputs if the task has been added
    this.clearInputs();
  }
}
