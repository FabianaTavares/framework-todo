import { UsersAlbunsDTO } from './../../models/usersAlbuns.model';
import { AlbunsDTO } from './../../models/albuns.model';
import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';
import { UsersDTO } from '../../models/users.model';
import { forkJoin, Subscription } from 'rxjs';
import { AlbumDeFotosDTO } from '../../models/albumDeFotosDTO.model';
import { PhotosDTO } from '../../models/photos.model';
import { MatTableDataSource } from '@angular/material';

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
          this.users.forEach(u => {
            this.todoListService.getAlbunsUsers(u.id).subscribe(
              (retorno) =>{
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
