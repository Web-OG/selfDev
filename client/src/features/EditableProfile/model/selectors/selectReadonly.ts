import {StateSchema} from 'app/providers/StoreProvider';

export const selectReadonly = (state: StateSchema) => state.profile?.readonly || false;
