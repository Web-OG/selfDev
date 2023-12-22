import {memo, ReactNode} from 'react';
import {NavLink, LinkProps} from 'react-router-dom';
import cls from './AppNavLink.module.scss';
import classNames from 'classnames';


export interface AppLinkProps extends LinkProps {
  className?: string;
  children?: ReactNode;
}

export const AppNavLink = memo((props: AppLinkProps) => {
  const {
    className,
    to,
    children,
    ...otherProps
  } = props;

  return (
    <NavLink
      to={to}
      className={({isActive}) => classNames(cls.AppNavLink, {[cls.active]: isActive}, className)}
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});
