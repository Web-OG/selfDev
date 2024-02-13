import {StateSchema} from 'app/providers/StoreProvider';

export const getLoginErrorFields = (state: StateSchema) => state?.authentication?.sendingErrorFields || undefined;
