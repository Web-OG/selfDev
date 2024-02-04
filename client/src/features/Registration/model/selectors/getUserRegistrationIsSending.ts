import {StateSchema} from 'app/providers/StoreProvider';

export const getUserRegistrationIsSending = (state: StateSchema) => state?.userRegistration?.isSending || false;
