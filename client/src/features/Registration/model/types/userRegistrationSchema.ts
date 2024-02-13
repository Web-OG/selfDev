import {SendingSliceFields} from 'shared/types';

export interface UserRegistrationFields {
  username: string;
  password: string;
  email: string;
}

export type UserRegistrationSchema = UserRegistrationFields & SendingSliceFields