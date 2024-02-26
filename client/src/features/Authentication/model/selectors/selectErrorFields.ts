import {StateSchema} from 'app/providers/StoreProvider';

export const selectErrorFields = (state: StateSchema) => state?.authentication?.sendingErrorFields || undefined;
