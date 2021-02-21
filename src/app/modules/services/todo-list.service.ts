import { PhotosDTO } from '../models/photos.model';
import { CommentsDTO } from '../models/comments.model';
import { AlbunsDTO } from '../models/albuns.model';
import { TodosDTO } from '../models/todos.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostsDTO } from '../models/posts.model';
import { UsersDTO } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(
     private http: HttpClient
  ) { }

  /**
   * @description USUARIOS
   */
  getUsersList(): Observable<Array<UsersDTO>> {
    return this.http.get<Array<UsersDTO>>(`${environment.API_URL}/users`);
  }

  /**
   * @description TODOS
   */
    getTodosList(): Observable<Array<TodosDTO>> {
      return this.http.get<Array<TodosDTO>>(`${environment.API_URL}/todos`);
    }

    getUserByTodo(idUser: number | string): Observable<UsersDTO> {
      return this.http.get<UsersDTO>(`${environment.API_URL}/users/${idUser}`);
    }


  /**
   * @description COMMENTS
   */
  getPostsList(): Observable<Array<PostsDTO>> {
    return this.http.get<Array<PostsDTO>>(`${environment.API_URL}/posts`);
  }

  getCommentsList(): Observable<Array<CommentsDTO>> {
    return this.http.get<Array<CommentsDTO>>(`${environment.API_URL}/comments`);
  }


  /**
   * @description ALBUNS
   */
  getAlbunsList(): Observable<Array<AlbunsDTO>> {
    return this.http.get<Array<AlbunsDTO>>(`${environment.API_URL}/albums`);
  }

  getAlbunsUsers(id: number | string): Observable<Array<AlbunsDTO>> {
    return this.http.get<Array<AlbunsDTO>>(`${environment.API_URL}/users/${id}/albums`);
  }

  /**
   * @description PHOTOS
   */
  getPhotosList(): Observable<Array<PhotosDTO>> {
    return this.http.get<Array<PhotosDTO>>(`${environment.API_URL}/photos`);
  }

  getPhotosByIdAlbum(id: number | string): Observable<Array<PhotosDTO>> {
    return this.http.get<Array<PhotosDTO>>(`${environment.API_URL}/albums/${id}/photos`);
  }

}
