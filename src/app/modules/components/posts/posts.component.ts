import { UsersDTO } from './../../models/users.model';
import { Component, OnInit } from '@angular/core';

import { PostsDTO } from '../../models/posts.model';
import { TodoListService } from '../../services/todo-list.service';
import { CommentsDTO } from '../../models/comments.model';
import { PostComComentariosDTO } from '../../models/PostComComentarioDTO.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],

})
export class PostsComponent implements OnInit {

  users: UsersDTO[] = [];
  postsComents: PostComComentariosDTO[] = [];
  panelOpenState = false;

  constructor(
    private todoListService: TodoListService
  ) { }

  ngOnInit(): void  {
    this.recuperaListaPosts();
  }

 recuperaListaPosts() {
    const buscaServicos = forkJoin([
      this.todoListService.getPostsList(),
      this.todoListService.getCommentsList(),
      this.todoListService.getUsersList(),
    ]);

    buscaServicos.subscribe(
      ([posts, coments, users]: [PostsDTO[], CommentsDTO[], UsersDTO[]]) => {

        const postsMap = new Map<string, PostComComentariosDTO>();
        for (const post of posts) {
          postsMap.set(post.id, { ...post, coments: [], users: [] });
        }
        for (const coment of coments) {
          postsMap.get(coment.postId).coments.push(coment);
        }

        for (const user of users) {
          postsMap.get(user.id).users.push(user.username);
        }

        this.postsComents = Array.from(postsMap.values());

      }
    );
  }

}
