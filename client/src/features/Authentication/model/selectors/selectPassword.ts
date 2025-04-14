import {StateSchema} from '@/app/providers/StoreProvider';

export const selectPassword = (state: StateSchema) => state?.authentication?.password || '';
