import {StateSchema} from 'app/providers/StoreProvider';

export const selectSendingErrorMsg = (state: StateSchema) => state?.userRegistration?.sendingErrorMsg || undefined;
