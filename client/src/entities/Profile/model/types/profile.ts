import {Currency} from '@/entities/Currency';
import {Country} from '@/entities/Country';

export interface Profile {
  _id?: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  age?: number,
  currency?: Currency,
  country?: Country;
  city?: string,
  username?: string;
  avatar?: string;
}

