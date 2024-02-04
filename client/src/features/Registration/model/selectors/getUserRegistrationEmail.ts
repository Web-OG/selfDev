import {StateSchema} from 'app/providers/StoreProvider';

export const getUserRegistrationEmail = (state: StateSchema) => state?.userRegistration?.email || '';
