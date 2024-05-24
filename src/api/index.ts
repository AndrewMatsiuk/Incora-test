import axios from 'axios';
import { Comment } from '../types/comment';
import { Post } from '../types/post';
import { User } from '../types/user';

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const userApi = {
  async getAllUsers(): Promise<User[]> {
    const response = await api.get('/users');
    return response.data;
  },
};

export const postApi = {
  async getPostsUser(id: number): Promise<Post[]> {
    const response = await api.get(`/posts?userId=${id}`);
    return response.data;
  },
  async createPost(id: number, value: Post): Promise<Post> {
    const response = await api.post(`/posts?userId=${id}`, value);
    return response.data;
  },
  async getPostComments(id: number): Promise<Comment[]> {
    const response = await api.get(`/comments?postId=${id}`);
    return response.data;
  },
  async updatePost(id: number, post: Post): Promise<Post> {
    const response = await api.put(`/comments?postId=${id}`, post);
    return response.data;
  },
  async deletePost(id: number): Promise<Post> {
    const response = await api.delete(`/comments?postId=${id}`);
    return response.data;
  },
};
