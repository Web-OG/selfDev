import {StateSchema} from '@/app/providers/StoreProvider';

export const selectLoadingError = (state: StateSchema) => state.profile?.loadingError || undefined;
