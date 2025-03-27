import {memo} from 'react';
import cls from './Overlay.module.scss';
import classNames from 'classnames';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

const Overlay = memo((props: OverlayProps) => {
  const {className, onClick} = props;

  return (
    <div onClick={onClick} className={classNames(cls.Overlay, [className])}/>
  );
});

Overlay.displayName = 'Overlay';
export {Overlay};
