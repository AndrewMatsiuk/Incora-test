import { UserState } from '../states';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { userApi } from '../../api';
import { User } from '../../types/user';

const initialState: UserState = {
  users: [],
};

const getUsers = createAsyncThunk(
  'user/getAllUsers',
  async (_, { dispatch }) => {
    try {
      const users = await userApi.getAllUsers();
      dispatch(userActions.setUsers(users));
    } catch (e) {
      console.log(e);
    }
  }
);

const { reducer, actions } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, { payload: users }: PayloadAction<User[]>) => {
      state.users = users;
    },
  },
});

export const userReducer = reducer;
export const userActions = { ...actions, getUsers };
