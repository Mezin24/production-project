import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export enum ValidateProfileErrors {
  INDALID_USER_DATA = 'INDALID_USER_DATA',
  INDALID_USER_AGE = 'INDALID_USER_AGE',
  INDALID_USER_COUNTRY = 'INDALID_USER_COUNTRY',
  SERVER_ERROR = 'SERVER_ERROR',
  EMPTY_PROFILE = 'EMPTY_PROFILE',
}

export interface Profile {
  name?: string,
  lastname?: string,
  age?: number,
  currency?: Currency,
  country?: Country,
  city?: string,
  username?: string,
  avatar?: string
 }

export interface ProfileSchema {
  data?: Profile,
  form?: Profile,
  isLoading: boolean,
  error?: string;
  validaionError?: ValidateProfileErrors[],
  readonly: boolean
 }
