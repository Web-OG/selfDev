import {StateSchema} from '@/app/providers/StoreProvider';

export const selectSendingErrorFields = (state: StateSchema) => state.profile?.sendingErrorFields || undefined;
