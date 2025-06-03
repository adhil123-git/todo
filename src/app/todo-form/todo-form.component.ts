import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
todo ='';
constructor(private service:TodoService){}
onSubmit(addTodo:NgForm){
this.todo='';
}
}
