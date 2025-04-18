import {MappedServerBadRequestErrors, ServerBadRequestError} from '../types';

export const mapServerBadRequestErrors = <T>(errs: ServerBadRequestError<T>[]): MappedServerBadRequestErrors => {
  return errs.reduce((acc, err) => (
    {...acc, [err.path as string]: err.msg})
  , {});
};