import {StateSchema} from 'app/providers/StoreProvider';

export const getLoginErrorMsg = (state: StateSchema) => state?.authentication?.sendingErrorMsg || undefined;
