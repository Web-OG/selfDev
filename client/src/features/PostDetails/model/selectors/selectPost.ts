import {StateSchema} from '@/app/providers/StoreProvider';

export const selectPost = (state: StateSchema) => state.postDetails?.post || null;
