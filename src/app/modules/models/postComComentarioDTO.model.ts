import { UsersDTO } from './users.model';
import { CommentsDTO } from "./comments.model";
import { PostsDTO } from "./posts.model";

export interface PostComComentariosDTO extends PostsDTO {
  coments: CommentsDTO[];
  users: string[];
}
