import {SendingSliceFields} from 'shared/types';

export interface UserRegistrationSchema extends SendingSliceFields {
  username: string;
  password: string;
  email: string;
}