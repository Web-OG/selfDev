import {StateSchema} from 'app/providers/StoreProvider';

export const getUserRegistrationSendingError = (state: StateSchema) => state?.userRegistration?.sendingError;
