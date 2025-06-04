import { Component,OnInit} from '@angular/core';
import { TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  constructor(public service: TodoService) {}
  get todos(): { text: string; completed: boolean }[] {
    return this.service.getTodos();
  }


  logTodos() {
  console.log(this.todos);
}

  deleteTodo(i: number) {
   
    this.todos.splice(i, 1);
    alert('Todo deleted successfully');
  }
  ngOnInit(): void {
    console.log(this.todos)
  }

}
