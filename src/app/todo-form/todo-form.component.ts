import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  todo = '';

  constructor(private service: TodoService, private router: Router, private snackBar: MatSnackBar) { }

  onSubmit(addTodo: NgForm) {
      this.service.add(this.todo);
      this.snackBar.open('Todo list successfully added', 'Close', {
        duration: 2000,
        verticalPosition: 'top',
      });
      this.todo = '';
      this.router.navigate(['/list'])
    }
  }

