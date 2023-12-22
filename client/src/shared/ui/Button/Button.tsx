import {ButtonHTMLAttributes, memo, ReactNode} from 'react';
import cls from './Button.module.scss';
import classNames from 'classnames';

type ButtonVariant = 'primary' | 'outlined'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    variant = 'primary',
    disabled,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(cls.Button, [className, cls[variant]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
