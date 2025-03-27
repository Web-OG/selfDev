import React, {memo, ReactNode} from 'react';
import {Overlay} from '../Overlay/Overlay';
import cls from './Drawer.module.scss';
import {Portal} from '../Portal';
import {useTheme} from '../../providers/ThemeProvider';
import classNames from 'classnames';
import {useModal} from '../../lib/hooks/useModal';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const Drawer = memo((props: DrawerProps) => {
  const {
    className,
    children,
    onClose,
    isOpen,
    lazy
  } = props;
  const {theme} = useTheme();
  const {
    closeHandler,
    isClosing,
    isMounted,
  } = useModal({
    onClose,
    isOpen,
  });

  const mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClick={closeHandler}/>
        <div
          className={cls.content}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
});

Drawer.displayName = 'Drawer';
export {Drawer};