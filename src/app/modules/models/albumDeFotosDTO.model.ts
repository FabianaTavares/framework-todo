import { UsersDTO } from './users.model';
import { PhotosDTO } from './photos.model';
import { AlbunsDTO } from './albuns.model';

export interface AlbumDeFotosDTO  {
  users: UsersDTO[];
  albuns: AlbunsDTO[];
}
