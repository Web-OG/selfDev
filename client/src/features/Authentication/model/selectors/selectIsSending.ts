import {StateSchema} from 'app/providers/StoreProvider';

export const selectIsSending = (state: StateSchema) => state?.authentication?.isSending ?? false;
