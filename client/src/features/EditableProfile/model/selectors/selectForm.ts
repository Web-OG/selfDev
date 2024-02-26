import {StateSchema} from 'app/providers/StoreProvider';
import {initialState} from '../slice/profileSlice';

export const selectForm = (state: StateSchema) => state.profile?.form || initialState.form;
