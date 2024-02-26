import {StateSchema} from 'app/providers/StoreProvider';

export const selectEmail = (state: StateSchema) => state?.userRegistration?.email || '';
