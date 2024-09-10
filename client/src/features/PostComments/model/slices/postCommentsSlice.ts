import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getPostCommentsById} from '../services/getPostCommentsById';
import {PostCommentsSchema} from '../types/postCommentsSchema';
import {Comment} from 'entities/Comment';

export const initialState: PostCommentsSchema = {
  isLoading: false,
  comments: [],
  loadingError: undefined
};

export const postCommentsSlice = createSlice({
  name: 'postComments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostCommentsById.pending, (state) => {
        state.loadingError = undefined;
        state.isLoading = true;
      })
      .addCase(getPostCommentsById.fulfilled, (
        state,
        action: PayloadAction<Comment[]>,
      ) => {
        state.isLoading = false;
        state.comments = action.payload;
      })
      .addCase(getPostCommentsById.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.loadingError = action.payload;
        }
      });
  },
});

export const {
  actions: postCommentsActions,
  reducer: postCommentsReducer
} = postCommentsSlice;
