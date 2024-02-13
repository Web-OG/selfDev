import {StateSchema} from 'app/providers/StoreProvider';

export const getUserRegistrationSendingErrorFields = (state: StateSchema) => state?.userRegistration?.sendingErrorFields || undefined;
