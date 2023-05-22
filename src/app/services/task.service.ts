import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public tasks = [
    {
      title: 'Eat',
      description: 'I will like to eat a Sandwich.',
      status: false,
    },
  ];

  constructor() {}

  // * 👇 This code change the status
  addTask(title: string, description: string): void {
    this.tasks.push({ title, description, status: false });
  }

  completeTask(index?: number) {
    // * 👇 This code change the status
    if (typeof index === 'number') {
      this.tasks[index].status = !this.tasks[index].status;
    }
  }

  deleteTask(index?: number) {
    // * 👇 If the index is a number then delete the task at the position of the index
    if (typeof index === 'number') this.tasks.splice(index, 1);
  }
}
