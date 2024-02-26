import {SendingSliceFields} from 'shared/lib/types';

export interface UserRegistrationFields {
  username: string;
  password: string;
  email: string;
}

export type UserRegistrationSchema = UserRegistrationFields & SendingSliceFields