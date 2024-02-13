import {SendingSliceFields} from 'shared/types';

export interface AuthenticationFields {
  username: string;
  password: string;
}

export type AuthenticationSchema = AuthenticationFields & SendingSliceFields

