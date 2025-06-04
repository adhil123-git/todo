import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',

})
export class CustomPipe implements PipeTransform {
  transform(todos: { text: string; completed: boolean }[]): any[] {
    return todos.filter(todo => todo.completed);
  }
}
