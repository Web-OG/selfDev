import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getPostById} from '../services/getPostById';
import {PostDetailsSchema} from '@/features/PostDetails';
import {PostEntity} from '@/entities/Post';

const initialState: PostDetailsSchema = {
  isLoading: false,
  error: undefined,
  post: undefined,
};

export const postDetailsSlice = createSlice({
  name: 'postDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getPostById.fulfilled, (
        state,
        action: PayloadAction<PostEntity>,
      ) => {
        state.isLoading = false;
        state.post = action.payload;
      })
      .addCase(getPostById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  actions: postDetailsActions,
  reducer: postDetailsReducer
} = postDetailsSlice;
