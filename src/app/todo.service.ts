import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoArr=[];
  constructor(private httpClient:HttpClient) { }

  getTodoList(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

  setTodoList(arr){
    this.todoArr=arr;
  }
  deleteTodo(id){
    this.todoArr=this.todoArr.filter((obj)=> obj.id !== id)
  }
  addTodo(obj){
    this.todoArr.push(obj);
  }
  editTodo(editobj){
    let oldObjIndex=this.todoArr.findIndex((obj)=> obj.id==editobj.id)
    this.todoArr.splice(oldObjIndex,1,editobj)
  }
  getUniqueId(){
    let id=Math.floor(Math.random()*100);
    let uniqueid=this.todoArr.find((obj)=> id == obj.id);
    if(uniqueid){
      return this.getUniqueId();
    }
    else{
      return id;
    }
  }
}
