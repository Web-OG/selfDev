import {StateSchema} from 'app/providers/StoreProvider';

export const selectSendingErrorFields = (state: StateSchema) => state?.userRegistration?.sendingErrorFields || undefined;
