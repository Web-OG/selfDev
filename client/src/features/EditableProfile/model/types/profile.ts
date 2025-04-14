import {LoadingAndSendingSliceFields} from '@/shared/lib/types';
import {Profile} from '@/entities/Profile';

export interface ProfileFields {
  data?: Profile;
  form?: Profile;
  readonly: boolean
}

export type ProfileSchema = ProfileFields & LoadingAndSendingSliceFields
