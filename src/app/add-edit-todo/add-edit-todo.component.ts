import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {TodoService} from '../todo.service';
@Component({
  selector: 'app-add-edit-todo',
  templateUrl: './add-edit-todo.component.html',
  styleUrls: ['./add-edit-todo.component.scss']
})
export class AddEditTodoComponent implements OnInit {
  @Output() PopupClosed = new EventEmitter<any>();
  @Input('action') action; 
  @Input ('editObj') editObj;
  title="";
     id="";
   body="";
  status=false;
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    if(this.editObj){
      this.id=this.editObj.id;
      this.title=this.editObj.title;
      this.body=this.editObj.body;
      
    }
  }
  ClosePopup(){
    this.PopupClosed.emit();
  }
  addTodo(){
  this.todoService.addTodo(
    {
      id:this.todoService.getUniqueId(),
      user_id:12,
      
      title:this.title,
      body:this.body,
  
    }
    );
    this.PopupClosed.emit('add');
  }
  editTodo(){
    let obj={
      id:this.editObj.id,
      user_id:this.editObj.user_id,
      title:this.title,
      body:this.body,
   
    }




    
    this.todoService.editTodo(obj);
    this.PopupClosed.emit('edit');
  }

}
