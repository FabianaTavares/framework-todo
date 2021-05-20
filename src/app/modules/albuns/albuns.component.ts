import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { AlbunsDTO } from '../models/albuns.model';
import { PhotosDTO } from '../models/photos.model';
import { UsersDTO } from '../models/users.model';
import { UsersAlbunsDTO } from '../models/usersAlbuns.model';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.scss']
})
export class AlbunsComponent implements OnInit {

  displayedColumns: string[] = ['idUsuario', 'name', 'title', 'actions'];
  dataSource: MatTableDataSource<UsersAlbunsDTO>;
  albuns: AlbunsDTO[] = [];
  photos: PhotosDTO[] = [];
  users: UsersDTO[] = [];
  usersAlbuns: UsersAlbunsDTO[] = [];

  constructor(
    private todoListService: TodoListService
  ) {
  }

  ngOnInit(): void  {
    this.recuperaListaAlbuns();
  }

  recuperaListaAlbuns(){
    let listaUsuariosAlbuns = [];
    this.todoListService.getUsersList().subscribe(
        (response) => {
          this.users = response;
           this.todoListService.getAlbunsList().subscribe(
              (retorno) =>{
                this.users.forEach(u => {
                  retorno.forEach(r => {
                    if(r.userId === u.id){
                      const listFront = {
                        id: u.id,
                        username: u.username,
                        idAlbun: r.id,
                        title: r.title,
                      }
                      listaUsuariosAlbuns.push(listFront);
                      this.dataSource = new MatTableDataSource(listaUsuariosAlbuns);
                    }
                })
              }
            )
          })
        }
      );
  }

}
