import {memo} from 'react';
import cls from './Text.module.scss';
import classNames from 'classnames';
import {TextAndLinkProps} from '../types';

const Text = memo((props: TextAndLinkProps) => {
  const {
    type = 'primary',
    display = 'block',
    deleted,
    italic,
    code,
    mark,
    keyboard,
    strong,
    underline,
    rootClassName,
    disabled,
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
    <div className={classNames(cls.text, mods, rootClassName)}>
      {children}
    </div>
  );
});

Text.displayName = 'Text';
export {Text};