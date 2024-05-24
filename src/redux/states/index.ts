import { Comment } from '../../types/comment';
import { Post } from '../../types/post';
import { User } from '../../types/user';

export type UserState = {
  users: User[];
};

export type PostState = {
  posts: Post[];
  comments: Comment[];
};
