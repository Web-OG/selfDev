import {useMemo} from 'react';
import cls from '../Input.module.scss';
import {InputValidationErrors} from '@/shared/lib/services/InputValidationService';
import {ProjectLanguages} from '@/shared/lib/types';
import {InputExternalErrorMassage} from '../Input';

interface Props {
  validationErrors: InputValidationErrors | null;
  currentLanguage: ProjectLanguages;
  externalError?: InputExternalErrorMassage;
}

export const useInputErrors = (props: Props) => {
  const {validationErrors, externalError, currentLanguage} = props;
  const ValidationErrors = useMemo(() => {
    return validationErrors && validationErrors[currentLanguage].length
      ? <div className={cls.errMassage} data-testid="errMassage">
        {Array.isArray(validationErrors[currentLanguage]) ? validationErrors?.[currentLanguage]?.join('\n') : '!'}
      </div>
      : null;
  }, [currentLanguage, validationErrors]);

  const ExternalErrors = useMemo(() => {
    if (externalError) {
      if (typeof externalError === 'string') {
        return <div className={cls.errMassage} data-testid="errMassage">
          {externalError}
        </div>;
      } else if (Array.isArray(externalError)) {
        return <div className={cls.errMassage} data-testid="errMassage">
          {externalError.join('\n')}
        </div>;
      } else if (typeof externalError === 'object' && !Array.isArray(externalError)) {
        return <div className={cls.errMassage} data-testid="errMassage">
          {externalError[currentLanguage]}
        </div>;
      } else return null;
    } else {
      return null;
    }
  }, [currentLanguage, externalError]);

  return {
    ValidationErrors,
    ExternalErrors
  };
};