import {
  createEntityAdapter,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import {StateSchema} from 'app/providers/StoreProvider';
import {PostEntity, PostView} from 'entities/Post';
import {getPostList} from 'widgets/InfinityPostList/model/services/getPostList/getPostList';
import {STORAGE_KEYS} from 'shared/lib/constants/storage';
import {PostListSchema} from 'widgets/InfinityPostList';
import {PostListWithPagination} from 'widgets/InfinityPostList/model/types/infinityPostListSchema';

const postsAdapter = createEntityAdapter<PostEntity, string>({
  selectId: (post) => post._id,
});

export const getPosts = postsAdapter.getSelectors<StateSchema>(
  (state) => {
    return state.postList || {ids: [], entities: {}};
  }
);

const postListSlice = createSlice({
  name: 'postListSlice',
  initialState: postsAdapter.getInitialState<PostListSchema>({
    isLoading: false,
    error: undefined,
    limit: 4,
    page: 1,
    hasMore: false,
    count: 1,
    view: 'small',
    pagination: {
      totalPages: 1,
      next: null,
      prev: null,
      currentPage: 1
    },
    entities: {},
    ids: []
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
        action: PayloadAction<PostListWithPagination>,
      ) => {
        const {count, data, hasMore, pagination} = action.payload;
        state.isLoading = false;
        postsAdapter.setAll(state, data);
        state.hasMore = hasMore;
        state.count = count;
        state.pagination = pagination;
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
