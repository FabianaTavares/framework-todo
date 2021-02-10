import { UsersDTO } from './../../models/users.model';
import { TodosDTO } from './../../models/todos.model';
import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ToDosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'completed'];
  innerDisplayedColumns: string[] = ['name']
  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  expandedElement: any;
  todosListas: TodosDTO[] = [];
  usersListas: UsersDTO;

  constructor(
    private todoListService: TodoListService
  ) { }

  ngOnInit() {
    this.recuperaListaTodos();
  }

  recuperaListaTodos() {
    this.todoListService.getTodosList().subscribe(
      (response) => {
        this.todosListas = response;
      }
    );
  }

  montaTabela(elemento){
    this.todoListService.getUserByTodo(elemento.userId).subscribe(
      (response) => {
        this.usersListas = response;
      }
    );
  }

}
