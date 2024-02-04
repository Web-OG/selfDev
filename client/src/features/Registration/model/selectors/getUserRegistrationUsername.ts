import {StateSchema} from 'app/providers/StoreProvider';

export const getUserRegistrationUsername = (state: StateSchema) => state?.userRegistration?.username || '';
