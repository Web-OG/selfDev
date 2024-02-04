import {SendingSliceFields} from 'shared/types';

export interface AuthorRegistrationSchema extends SendingSliceFields {
  username: string;
  password: string;
  email: string;
}