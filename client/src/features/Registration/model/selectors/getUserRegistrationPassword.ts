import {StateSchema} from 'app/providers/StoreProvider';

export const getUserRegistrationPassword = (state: StateSchema) => state?.userRegistration?.password || '';
