import { UsersDTO } from './../../models/users.model';
import { TodosDTO } from './../../models/todos.model';
import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Observable } from 'rxjs';


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
  //expandedElement: TodosDTO[] = [];
  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  expandedElement: any;
  todosListas: TodosDTO[] = [];
  usersListas: UsersDTO;
  qtdTodos!: number;

  constructor(
    private todoListService: TodoListService
  ) { }

  ngOnInit() {
    this.recuperaListaTodos();
    //this.recuperarUsers();
  }

  recuperaListaTodos() {
    this.todoListService.getTodosList().subscribe(
      (response) => {
        this.todosListas = response;
        this.qtdTodos = this.todosListas.length;
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
