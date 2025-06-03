import { Injectable } from '@angular/core';

export interface Todo {
  text: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  tododata: Todo[] = [];

  constructor() { }

  add(todoText: string) {
    if (todoText.trim()) {
      this.tododata.push({ text: todoText, completed: false });
    }
  }

  remove(index: number) {
    this.tododata.splice(index, 1);
  }

  toggle(index: number) {
    this.tododata[index].completed = !this.tododata[index].completed;
  }

  getTodos() {
    return this.tododata;
  }
}
