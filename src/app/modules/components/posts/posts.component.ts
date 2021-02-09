import { UsersDTO } from './../../models/users.model';
import { Component, OnInit } from '@angular/core';

import { PostsDTO } from '../../models/posts.model';
import { TodoListService } from '../../services/todo-list.service';
import { CommentsDTO } from '../../models/comments.model';
import { PostComComentariosDTO } from '../../models/PostComComentarioDTO.model';
import { forkJoin, Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],

})
export class PostsComponent implements OnInit {

  postsListas!: PostsDTO[];
  comentsListas: CommentsDTO[] = [];
  users: UsersDTO[] = [];
  postsComents: PostComComentariosDTO[] = [];
  userSelected: string = '';
  subscription!: Subscription;

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
          postsMap.set(post.id, { ...post, coments: [] });
        }
        for (const coment of coments) {
          postsMap.get(coment.postId).coments.push(coment);
        }

        this.postsComents = Array.from(postsMap.values());

        this.users = users;

        console.log(this.postsComents);

      }
    );
  }

}
