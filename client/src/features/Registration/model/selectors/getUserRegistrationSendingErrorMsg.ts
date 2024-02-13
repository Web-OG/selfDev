import {StateSchema} from 'app/providers/StoreProvider';

export const getUserRegistrationSendingErrorMsg = (state: StateSchema) => state?.userRegistration?.sendingErrorMsg || undefined;
