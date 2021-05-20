import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { AlbunsComponent } from './albuns/albuns.component';
import { PhotosComponent } from './photos/photos.component';
import { PostsComponent } from './posts/posts.component';
import { ToDosComponent } from './to-dos/to-dos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'todos', component: ToDosComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'albuns', component: AlbunsComponent },
  { path: 'photos/:id', component: PhotosComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoListRoutingModule { }
