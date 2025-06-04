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
}
