import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  constructor(private service: TodoService, private snackBar: MatSnackBar) {}

  get todos() {
    return this.service.getTodos();
  }

  deleteTodo(i: number) {
    this.service.delete(i);
    this.snackBar.open('Todo list deleted', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
    });
  }

  
}
