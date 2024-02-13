import {SendingSliceFields} from 'shared/types';

interface AuthorRegistrationFields {
  username: string;
  password: string;
  email: string;
}

export type AuthorRegistrationSchema = AuthorRegistrationFields & SendingSliceFields