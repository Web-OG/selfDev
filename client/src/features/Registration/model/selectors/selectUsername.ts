import {StateSchema} from 'app/providers/StoreProvider';

export const selectUsername = (state: StateSchema) => state?.userRegistration?.username || '';
