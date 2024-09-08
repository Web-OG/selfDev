import {StateSchema} from 'app/providers/StoreProvider';

export const selectIsLoading = (state: StateSchema) => state.postList?.isLoading || false;
export const selectError = (state: StateSchema) => state.postList?.error;
export const selectView = (state: StateSchema) => state.postList?.view || 'small';
export const selectCurrentPage = (state: StateSchema) => state.postList?.page || 1;
export const selectLimit = (state: StateSchema) => state.postList?.limit || 9;
export const selectHasMore = (state: StateSchema) => state.postList?.hasMore || false;
