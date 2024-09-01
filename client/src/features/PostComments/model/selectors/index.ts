import {StateSchema} from 'app/providers/StoreProvider';

export const selectComments = (state: StateSchema) => state?.postComments?.comments || [];