import {StateSchema} from 'app/providers/StoreProvider';

export const getLoginIsSending = (state: StateSchema) => state?.authentication?.isSending ?? false;
