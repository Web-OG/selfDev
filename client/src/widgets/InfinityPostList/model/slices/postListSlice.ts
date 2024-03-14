import {createEntityAdapter, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StateSchema} from 'app/providers/StoreProvider';
import {Post, PostView} from 'entities/Post';
import {getPostList} from 'widgets/InfinityPostList/model/services/getPostList/getPostList';
import {InfinityPostListSchema} from '../types/infinityPostListSchema';
import {STORAGE_KEYS} from 'shared/lib/constants/storage';

const postsAdapter = createEntityAdapter<Post, string>({
  selectId: (post) => post.id,
});

export const getPosts = postsAdapter.getSelectors<StateSchema>(
  (state) => state.postList || postsAdapter.getInitialState(),
);

const postListSlice = createSlice({
  name: 'postListSlice',
  initialState: postsAdapter.getInitialState<InfinityPostListSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: 'small',
    page: 1,
    hasMore: true,
  }),
  reducers: {
    setView: (state, action: PayloadAction<PostView>) => {
      state.view = action.payload;
      localStorage.setItem(STORAGE_KEYS.POST_VIEW, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(STORAGE_KEYS.POST_VIEW) as PostView;
      state.view = view;
      state.limit = view === 'big' ? 4 : 9;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getPostList.fulfilled, (
        state,
        action: PayloadAction<Post[]>,
      ) => {
        state.isLoading = false;
        postsAdapter.addMany(state, action.payload);
        state.hasMore = action.payload.length > 0;
      })
      .addCase(getPostList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  reducer: postListReducer,
  actions: postListActions,
} = postListSlice;
