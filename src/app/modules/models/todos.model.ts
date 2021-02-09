import { UsersDTO } from './users.model';
export interface TodosDTO {
  id: string;
  userId: string;
  title: string;
  complete: string;
  users?: string[];
}
