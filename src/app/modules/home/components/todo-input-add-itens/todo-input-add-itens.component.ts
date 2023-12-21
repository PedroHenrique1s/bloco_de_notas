import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {

  @Output() public emiItemTaskList= new EventEmitter();

  public addItemTaskList: string = "";
  
  public submitItemTaskList(){
    this.addItemTaskList = this.addItemTaskList.trim();

    if(this.addItemTaskList){
      this.emiItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList="";
    }    
  }

}
