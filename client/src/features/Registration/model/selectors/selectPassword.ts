import {StateSchema} from 'app/providers/StoreProvider';

export const selectPassword = (state: StateSchema) => state?.userRegistration?.password || '';
