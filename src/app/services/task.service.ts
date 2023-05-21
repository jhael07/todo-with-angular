import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = [
    {
      title: 'Eat',
      description: 'I will like to eat a Sandwich.',
      status: false,
    },
  ];

  constructor() {}

  addTask(title: string, description: string): void {
    this.tasks.push({ title, description, status: false });
  }
}
