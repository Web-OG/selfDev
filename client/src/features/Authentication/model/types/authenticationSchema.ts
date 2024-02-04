import {SendingSliceFields} from 'shared/types';

export interface AuthenticationSchema extends SendingSliceFields {
  username: string;
  password: string;
}
