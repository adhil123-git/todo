import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TodoService } from '../todo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  constructor(private service: TodoService, private snackBar: MatSnackBar) { }
  list:any=[];
   todos:any[]=[];
  ngOnInit(): void {
    this.todos=this.service.getTodos();
  
     for(let value of this.todos){
    console.log(value.completed)
    console.log(value)
  }
  }

 

  completed():any {
     this.snackBar.open('Todo list completed', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
    });
  }

  deleteTodo(i: number) {
    this.todos.splice(i, 1);
    this.snackBar.open('Todo list deleted', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
    });
  }
 

}
