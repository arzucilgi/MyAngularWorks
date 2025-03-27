import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from "./todo-list/todo-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, TodoListComponent],
  template:`

  <h1>Input/Output Örnek</h1>
  <input [(ngModel)]="work" type="text" >
  <button (click)="addTodo()">Kaydet</button>
  <app-todo-list [todosGelen]="todos" ></app-todo-list>
  <hr>
  `
})
export class AppComponent {
  title = 'state-managament-proje';
  work: string=""
  todos: any[]=[]

  addTodo(){
    this.todos.push(this.work)
    this.work=""
  }
}
