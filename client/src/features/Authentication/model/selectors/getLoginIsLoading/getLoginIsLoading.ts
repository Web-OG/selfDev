import {StateSchema} from 'app/providers/StoreProvider';

export const getLoginIsLoading = (state: StateSchema) => state?.authentication?.isLoading || false;
