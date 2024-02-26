import {StateSchema} from 'app/providers/StoreProvider';

export const selectErrorMsg = (state: StateSchema) => state?.authentication?.sendingErrorMsg || undefined;
