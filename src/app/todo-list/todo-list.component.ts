import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  constructor(private service: TodoService, private snackBar: MatSnackBar) { }

  completedTodos: { text: string, completed: boolean }[] = [];
  todos: any = [
    { text: "task-1", completed: false },
    { text: "task-2", completed: false },
    { text: "task-3", completed: false },
    { text: "task-4", completed: false },
    { text: "task-5", completed: false },
    { text: "task-6", completed: false },
    { text: "task-7", completed: false },
  ];
  //  todos:any[]=[];
  // ngOnInit(): void {
  //   this.todos=this.service.getTodos();
  // }



  completed() {
    // this.completedTodos=[];
    // for (let todo of this.todos) {
    //   if (todo.completed) {
    //     this.completedTodos.push(todo);
    //   }
    // }
    // console.log(this.completedTodos)
    // const user=this.todos.filter((u:{completed:any;})=>u.completed)
    // console.log(user)

  }
  deleteTodo(i: number) {
    this.todos.splice(i, 1);
    this.snackBar.open('Todo list deleted', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
    });
     this.completed();
  }

}
