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

  toggleTodo(i: number) {
    this.service.toggle(i);
    console.log(this.todos);
  }

  deleteTodo(i: number) {
    this.service.delete(i);
  }
  ngOnInit(): void {
    console.log(this.todos)
  }

}
