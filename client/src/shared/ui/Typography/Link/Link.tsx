import {HTMLAttributes, memo} from 'react';
import cls from '../Text/Text.module.scss';
import {TextAndLinkProps} from '../types';
import classNames from 'classnames';
import {RoutePaths} from '@/app/providers/AppRouter';
import {Link as RRDLink} from 'react-router-dom';

interface RRDLinkProps extends Omit<HTMLAttributes<HTMLAnchorElement>, 'children' | 'onClick'>, TextAndLinkProps {
  to: RoutePaths | `/${RoutePaths}`
  href?: undefined
}

interface NativeLinkProps extends Omit<HTMLAttributes<HTMLAnchorElement>, 'children' | 'onClick'>, TextAndLinkProps {
  href: string
  to?: undefined
}

type LinkProps = NativeLinkProps | RRDLinkProps;

const Link = memo((props: LinkProps) => {
  const {
    type = 'focus',
    display = 'inline',
    onClick = () => {
    },
    deleted,
    italic,
    code,
    mark,
    keyboard,
    strong,
    underline = true,
    rootClassName,
    disabled,
    href = '',
    to,
    children
  } = props;

  const mods = {
    [cls[type]]: true,
    [cls[display]]: true,
    [cls.italic]: italic,
    [cls.code]: code,
    [cls.mark]: mark,
    [cls.keyboard]: keyboard,
    [cls.strong]: strong,
    [cls.maunderlinerk]: underline,
    [cls.disabled]: disabled,
    [cls.deleted]: deleted,
  };

  return (
    to
      ? <RRDLink to={to} className={classNames(cls.text, mods, rootClassName)} onClick={onClick}>
        {children}
      </RRDLink>
      : <a href={href} className={classNames(cls.text, mods, rootClassName)} onClick={onClick}>
        {children}
      </a>
  );
});

Link.displayName = 'Link';
export {Link};