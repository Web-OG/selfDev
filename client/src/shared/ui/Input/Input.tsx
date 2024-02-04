import {ChangeEvent, FocusEvent, memo, ReactNode, useEffect, useRef, useState} from 'react';
import cls from './Input.module.scss';
import classNames from 'classnames';
import {HTMLInputProps} from 'shared/types';
import {InputValidations, InputValidationService} from 'shared/lib/services/InputValidationService';

type InputErrorMassage = undefined | string | string[];

interface InputProps extends HTMLInputProps {
  className?: string;
  value: string | number;
  onChange: (value: string) => void;
  label?: ReactNode,
  autofocus?: boolean;
  readonly?: boolean;
  errMassage?: InputErrorMassage;
  noticeMassage?: string;
  validations?: InputValidations[]
}

const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    label,
    autofocus,
    readonly,
    validations,
    errMassage,
    ...otherProps
  } = props;

  const [validationErrors, setValidationErrors] = useState<InputErrorMassage>(undefined);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    onChange?.(value);
    ref.current?.setCustomValidity('');
  };

  const onFocus = () => {
    setValidationErrors(undefined);
  };

  const onBlur = (evt: FocusEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    if (validations) {
      const errors = InputValidationService.validate(value, validations);
      if (errors.length) {
        setValidationErrors(errors);
        ref.current?.setCustomValidity(errors[0]);
      } else {
        ref.current?.setCustomValidity('');
      }
    }
  };

  return (
    <div className={classNames(cls.InputWrapper, {[cls.readonly]: readonly}, className)}>
      {label && (
        <div className={cls.label}>
          {label}
        </div>
      )}
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={classNames(cls.input, {[cls.invalid]: validationErrors})}
        readOnly={readonly}
        onFocus={onFocus}
        onBlur={onBlur}
        {...otherProps}
      />
      {(errMassage || validationErrors) && (
        <div className={cls.errMassage}>
          {Array.isArray(errMassage) ? errMassage.join('\n') : errMassage}
          {Array.isArray(validationErrors) ? validationErrors.join('\n') : validationErrors}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';
export {Input};