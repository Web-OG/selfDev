import {StateSchema} from 'app/providers/StoreProvider';
import {initialState} from '../slices/postCommentsSlice';

export const selectComments = (state: StateSchema) => state?.postComments?.comments ?? initialState.comments;