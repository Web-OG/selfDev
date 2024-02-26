import {StateSchema} from 'app/providers/StoreProvider';

export const selectAvatar = (state: StateSchema) => state.profile?.data?.avatar || '';
