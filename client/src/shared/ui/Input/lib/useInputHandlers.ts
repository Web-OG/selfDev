import {ChangeEvent, Dispatch, FocusEvent, RefObject, SetStateAction, useCallback} from 'react';
import {
  InputValidationErrors,
  InputValidations,
  InputValidationService
} from 'shared/lib/services/InputValidationService';
import {ProjectLanguages} from 'shared/types';

interface Props {
  onChange: (value: string) => void;
  setValidationErrors: Dispatch<SetStateAction<InputValidationErrors | null>>;
  currentLanguage: ProjectLanguages;
  validations?: InputValidations[];
  ref?: RefObject<HTMLInputElement>
}

export const useInputHandlers = (props: Props) => {
  const {setValidationErrors, onChange, currentLanguage, validations, ref} = props;

  const onChangeHandler = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    onChange?.(value);
    ref?.current?.setCustomValidity('');
  }, [onChange, ref]);

  const onFocus = useCallback(() => {
    setValidationErrors(null);
  }, [setValidationErrors]);

  const onBlur = useCallback((evt: FocusEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    if (validations) {
      const errors = InputValidationService.validate(value, validations);
      if (errors[currentLanguage].length) {
        setValidationErrors(errors);
        ref?.current?.setCustomValidity(errors[currentLanguage][0]);
      } else {
        ref?.current?.setCustomValidity('');
      }
    }
  }, [currentLanguage, ref, setValidationErrors, validations]);

  return {
    onChangeHandler,
    onFocus,
    onBlur
  };
};