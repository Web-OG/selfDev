import {StateSchema} from 'app/providers/StoreProvider';

export const selectSendingErrorMsg = (state: StateSchema) => state.profile?.sendingErrorMsg || undefined;
