import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {TodoService} from '../todo.service';
@Component({
  selector: 'app-todo-tile',
  templateUrl: './todo-tile.component.html',
  styleUrls: ['./todo-tile.component.scss']
})
export class TodoTileComponent implements OnInit {
  @Input('todoObj') todoObj
  @Output() todoListUpdated = new EventEmitter<any>();
  showAddEditTodo=false;
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }
  deleteTodo(){
    console.log(this.todoObj.id)
    this.todoService.deleteTodo(this.todoObj.id);
    this.todoListUpdated.emit('delete');
  }
  EditTodo(){
    this.showAddEditTodo=true;
  }
  viewTodo(){
    this.showAddEditTodo=true;
  }
  PopupClosed(str){
    console.log(str)
    this.showAddEditTodo=false;
    this.todoListUpdated.emit(str);
  }

}
