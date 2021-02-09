import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbunsComponent } from './components/albuns/albuns.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { ToDosComponent } from './components/to-dos/to-dos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'todos', component: ToDosComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'albuns', component: AlbunsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoListRoutingModule { }
