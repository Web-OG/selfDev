import {SendingSliceFields} from '@/shared/lib/types';

interface AuthorRegistrationFields {
  username: string;
  password: string;
  email: string;
}

export type AuthorRegistrationSchema = AuthorRegistrationFields & SendingSliceFields