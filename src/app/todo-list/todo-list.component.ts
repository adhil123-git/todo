import { Component } from '@angular/core';
import { TodoService, Todo } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  constructor(public service: TodoService) {}

  toggleTodo(index: number) {
    this.service.toggle(index);
  }

  deleteTodo(index: number) {
    this.service.remove(index);
  }

  get todos(): Todo[] {
    return this.service.getTodos();
  }
}
