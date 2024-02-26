import {HTMLAttributes, memo} from 'react';
import cls from '../Text/Text.module.scss';
import {TextAndLinkProps} from 'shared/ui/Typography/types';
import classNames from 'classnames';

interface LinkProps extends Omit<HTMLAttributes<HTMLAnchorElement>, 'children' | 'onClick'>, TextAndLinkProps {
  href?: string
}

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
    <a href={href} className={classNames(cls.text, mods, rootClassName)} onClick={onClick}>
      {children}
    </a>
  );
});

Link.displayName = 'Link';
export {Link};