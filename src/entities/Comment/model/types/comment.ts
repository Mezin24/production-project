import { User } from 'entities/User/types/user';

export interface Comment {
  id: string;
  user: User;
  text: string
}
