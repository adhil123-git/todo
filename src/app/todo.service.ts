import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  tododata: { text: string; completed: boolean }[] = [];

  constructor() { }

  add(todoText: string) {
    if (todoText) {
      this.tododata.push({ text: todoText, completed: false });
    }
  }

  getTodos() {
    return this.tododata;
  }

  delete(index: number) {
    this.tododata.splice(index, 1);
  }

  toggleCompleted(index: number) {
    this.tododata[index].completed = !this.tododata[index].completed;
    this.tododata = [...this.tododata]; // Change the array reference
  }
}
