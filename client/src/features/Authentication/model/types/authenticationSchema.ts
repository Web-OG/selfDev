import {SendingSliceFields} from '@/shared/lib/types';

export interface AuthenticationFields {
  username: string;
  password: string;
}

export type AuthenticationSchema = AuthenticationFields & SendingSliceFields

