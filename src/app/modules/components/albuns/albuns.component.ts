import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.scss']
})
export class AlbunsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'action'];
  //expandedElement: PostsDTO[] = [];

  //postsListas: PostsDTO[] = [];

  qtdPosts!: number;

  // tslint:disable-next-line: no-inferrable-types
  loading: boolean = false;

  constructor(
    private todoListService: TodoListService
  ) { }

  ngOnInit() {
    this.loading = true;
    //this.recuperaListaPosts();
  }

  /* recuperaListaPosts() {
    this.todoListService.getPostsList().subscribe(
      (response) => {
        this.postsListas = response;
        console.log(this.postsListas);
        this.qtdPosts = this.postsListas.length;
        this.loading = false;
      }, () => this.loading = false
    );
  }

  visualizarComents(element){
    console.log(element)
    // This is equivalent to /comments?postId=1
    fetch(`https://jsonplaceholder.typicode.com/posts/${element.id}/comments`)
      .then((response) => response.json())
      .then((json) => console.log(json));

  } */

}
