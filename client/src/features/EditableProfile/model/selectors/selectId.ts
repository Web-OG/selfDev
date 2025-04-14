import {StateSchema} from '@/app/providers/StoreProvider';

export const selectId = (state: StateSchema) => state.profile?.data?._id;
