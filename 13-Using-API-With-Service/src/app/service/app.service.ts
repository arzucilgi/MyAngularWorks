import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private myClient:HttpClient
  ) { }

  get(){
    return this.myClient.get("https://jsonplaceholder.typicode.com/todos")
  }

  add(model:any){
    return this.myClient.post("https://jsonplaceholder.typicode.com/todos",model)
  }
}
