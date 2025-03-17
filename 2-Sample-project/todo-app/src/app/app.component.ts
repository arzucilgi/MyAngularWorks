import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
  <h1>Todo App</h1>
  @if(!isUbdateActive){
    <label for="">Work</label>
    <input [(ngModel)]="works"type="text">
    <button (click)="save()">Save</button>
  }@else{
    <label for="">Update Work</label>
    <input [(ngModel)]="ubdateWorks"type="text">
    <button (click)="ubdate()">Ubdate</button>
  }

  <div>
    <ul>
       @for (data of todos; track data){
        <li>
          {{data}}
          @if(!isUbdateActive){
           <button (click)="get($index)">Ubdate</button>
           <button (click)="delete($index)">Delete</button>
          }
        </li>
       }
    
    </ul>
  </div>
  `
})
export class AppComponent {
  works: string = ""
  todos: string[] = []
  ubdateWorks: string = ""
  ubdateIndex: number = 0
  isUbdateActive: boolean = false

  save() {
    this.todos.push(this.works)
    this.works = ""
  }

  delete(index: number) {
    this.todos.splice(index, 1)
  }
  get(index: number) {
    this.ubdateIndex = index
    this.ubdateWorks = this.todos[index]
    this.isUbdateActive=true
  }
  ubdate() {
    this.todos[this.ubdateIndex] = this.ubdateWorks
    this.ubdateWorks = ""
    this.isUbdateActive=false
  }
}
