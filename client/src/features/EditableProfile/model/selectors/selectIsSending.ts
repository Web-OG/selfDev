import {StateSchema} from 'app/providers/StoreProvider';

export const selectIsSending = (state: StateSchema) => state.profile?.isSending || false;
