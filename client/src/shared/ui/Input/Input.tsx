import {ChangeEvent, InputHTMLAttributes, memo, ReactNode, useEffect, useRef,} from 'react';
import cls from './Input.module.scss';
import classNames from 'classnames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value: string | number;
  onChange: (value: string) => void;
  label?: ReactNode,
  autofocus?: boolean;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    label,
    autofocus,
    readonly,
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);


  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
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
        className={cls.input}
        id={'input'}
        readOnly={readonly}
        {...otherProps}
      />
    </div>
  );
});
