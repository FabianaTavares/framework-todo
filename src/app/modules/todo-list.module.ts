import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from '../components/home/home.component';
import { AlbunsComponent } from './albuns/albuns.component';
import { PhotosComponent } from './photos/photos.component';
import { PostsComponent } from './posts/posts.component';
import { ToDosComponent } from './to-dos/to-dos.component';
import { TodoListRoutingModule } from './todo.routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    PostsComponent,
    AlbunsComponent,
    ToDosComponent,
    PhotosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TodoListRoutingModule,
    RouterModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule
  ],
  exports:[
    HomeComponent,
  ]
})
export class TodoListModule { }
