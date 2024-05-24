import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postApi } from '../../api';
import { Comment } from '../../types/comment';
import { Post } from '../../types/post';

import { PostState } from '../states';

const initialState: PostState = {
  posts: [],
  comments: [],
};

const getPosts = createAsyncThunk(
  'post/getPosts',
  async (payload: { userId: number }, { dispatch }) => {
    try {
      const { userId } = payload;
      const posts = await postApi.getPosts(+userId);
      dispatch(postActions.setPosts(posts));
    } catch (e) {
      console.log(e);
    }
  }
);

const createPost = createAsyncThunk(
  'post/createPost',
  async (payload: { post: Post; id: number }, { dispatch }) => {
    try {
      const post = await postApi.createPost(payload.post.postId, payload.post);
      dispatch(postActions.setCreatePost(post));
      console.log(post);
    } catch {}
  }
);

const editPost = createAsyncThunk(
  'post/editProduct',
  async (payload: { post: Post }, { dispatch }) => {
    try {
      const { id } = payload.post;
      const post = await postApi.updatePost(id, payload.post);
      dispatch(postActions.setEditPost(post));
    } catch (e) {
      console.log(e);
    }
  }
);

const deletePost = createAsyncThunk(
  'post/deletePost',
  async (payload: { post: Post; navigate: Function }, { dispatch }) => {
    try {
      const { post, navigate } = payload;
      await postApi.deletePost(post?.id);

      dispatch(postActions.setDeletePost(payload.post));
      navigate(-1);
    } catch (e) {
      console.log(e);
    }
  }
);

const getPostComments = createAsyncThunk(
  'post/getPostComments',
  async (payload: { postId: number }, { dispatch }) => {
    try {
      const { postId } = payload;
      const comments = await postApi.getPostComments(postId);
      dispatch(postActions.setComments(comments));
    } catch (e) {
      console.log(e);
    }
  }
);

const { reducer, actions } = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, { payload: posts }: PayloadAction<Post[]>) => {
      state.posts = posts;
    },
    setEditPost: (state, { payload: post }: PayloadAction<Post>) => {
      const newPostsList = state.posts.map((item) => {
        if (item.id === post.id) {
          return post;
        }
        return item;
      });
      state.posts = newPostsList;
    },
    setDeletePost: (state, { payload: post }: PayloadAction<Post>) => {
      const newPostList = state.posts.filter((item) => item.id !== post.id);
      state.posts = newPostList;
    },
    setComments: (state, { payload: comments }: PayloadAction<Comment[]>) => {
      state.comments = comments;
    },
    setCreatePost: (state, { payload: post }: PayloadAction<Post>) => {
      state.posts.push(post);
    },
  },
});

export const postReducer = reducer;
export const postActions = {
  ...actions,
  getPosts,
  getPostComments,
  createPost,
  editPost,
  deletePost,
};
