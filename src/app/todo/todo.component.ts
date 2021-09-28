import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList=[];
  showAddEditTodo=false;
  messageTxt="";
  showMessage=false;
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe(
      (res:any)=>{
        console.log(res)
        this.todoList=res;
        this.todoService.setTodoList(res);
      },
      (err)=>{
        console.log('Error in loading  api');
      }
    )
  }
  addTodo(){
    this.showAddEditTodo=true;
  }
  todoListUpdated(str){
    console.log(str)
    this.message(str);
    this.todoList=this.todoService.todoArr;
  }
  PopupClosed(str){
    console.log(str)
    this.message(str);
    this.showAddEditTodo=false;
  }
  message(str){
    if(str){
      this.showMessage =true;
      setTimeout(()=>{this.showMessage =false},3000)
    }
    if(str=='edit'){
      this.messageTxt=' Updated successfully !!!'
    }
    else if(str=='delete'){
      this.messageTxt=' deleted successfully !!!'
    }
    else if(str=='add'){
      this.messageTxt='added successfully !!!'
    }
  }

}
