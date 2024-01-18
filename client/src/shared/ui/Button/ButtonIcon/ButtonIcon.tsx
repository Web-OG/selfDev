import {memo} from 'react';
import cls from './ButtonIcon.module.scss';
import {ButtonIconHash} from './ButtonIconHash';
import classNames from 'classnames';
import {ButtonProps} from 'shared/ui/Button/Button/Button';

export type ButtonIconVariant = 'cross';
export type ButtonSize = 's' | 'm' | 'l';

interface ButtonIconProps extends Omit<ButtonProps, 'variant'>{
  variant?: ButtonIconVariant,
  size?: ButtonSize
}

const ButtonIcon = memo((props: ButtonIconProps) => {
  const {className, variant = 'cross', size, ...otherProps} = props;

  const sizes = {
    [cls.sizeS] : size === 's',
    [cls.sizeM] : size === 'm',
    [cls.sizeL] : size === 'l',
  };

  return (
    <button className={classNames(cls.ButtonIcon, className)} {...otherProps}>
      <ButtonIconHash variant={variant} className={classNames(sizes)} />
    </button>
  );
});

ButtonIcon.displayName = 'ButtonIcon';
export {ButtonIcon};