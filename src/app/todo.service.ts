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

  delete(i: number) {
    this.tododata.splice(i, 1);
  }

  toggle(i: number) {
    this.tododata[i].completed = !this.tododata[i].completed;
  }

  getTodos() {
    return this.tododata;
    
  }
}
