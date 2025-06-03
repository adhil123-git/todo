import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  todo = '';

  constructor(private service: TodoService) {}

  onSubmit(addTodo: NgForm) {
    if (this.todo.trim()) {
      this.service.add(this.todo);
      this.todo = '';
      addTodo.resetForm();
    }
  }
}
