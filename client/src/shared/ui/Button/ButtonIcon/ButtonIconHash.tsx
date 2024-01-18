import {HTMLAttributes, ReactNode} from 'react';
import {ButtonIconVariant} from './ButtonIcon';
import CrossIcon from '../../../assets/svgs/cross.svg';

interface ButtonIconHashProps extends HTMLAttributes<SVGElement>{
  variant: ButtonIconVariant,
}

export const ButtonIconHash = (props:ButtonIconHashProps) => {
  const {variant, ...otherProps} = props;

  const hash : Record<ButtonIconVariant, ReactNode> = {
    cross: <CrossIcon {...otherProps}/>
  };
  return hash[variant];
};
