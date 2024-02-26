import {StateSchema} from 'app/providers/StoreProvider';

export const selectIsSending = (state: StateSchema) => state?.userRegistration?.isSending || false;
