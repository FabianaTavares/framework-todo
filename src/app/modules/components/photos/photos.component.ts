import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Subscription } from 'rxjs';
import { AlbumDeFotosDTO } from '../../models/albumDeFotosDTO.model';
import { AlbunsDTO } from '../../models/albuns.model';
import { PhotosDTO } from '../../models/photos.model';
import { UsersDTO } from '../../models/users.model';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  albuns: AlbunsDTO[] = [];
  photos: PhotosDTO[] = [];
  users: UsersDTO[] = [];
  albumPhotos: AlbumDeFotosDTO[] = [];
  userSelected: string = '';
  subscription!: Subscription;
  id: number;
  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }
  constructor(
    private todoListService: TodoListService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void  {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.recuperaFotos();
    });

  }

  recuperaFotos(){
    this.todoListService.getPhotosByIdAlbum(this.id).subscribe(
      (response) => {
        console.log(response);
        this.photos = response;
      }
    )
  }

}
