import { UsersDTO } from './users.model';
import { AlbunsDTO } from './albuns.model';

export interface AlbumDeFotosDTO  {
  users: UsersDTO[];
  albuns: AlbunsDTO[];
}
