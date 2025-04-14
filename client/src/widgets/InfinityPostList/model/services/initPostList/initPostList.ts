import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from '@/app/providers/StoreProvider';
import {selectInited} from '../../selectors';
import {getPostList} from '../getPostList/getPostList';
import {postListActions} from '../../slices/postListSlice';

export const initPostList = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
  'postList/initPostList',
  async (_, thunkApi) => {
    const {getState, dispatch} = thunkApi;
    const inited = selectInited(getState());

    if (!inited) {
      dispatch(postListActions.initState());
      dispatch(getPostList({
        page: 1,
      }));
    }
  },
);
