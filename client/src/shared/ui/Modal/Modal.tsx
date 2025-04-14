import {ReactNode} from 'react';
import {Portal} from '../Portal';
import {useTheme} from '@/shared/providers/ThemeProvider';
import cls from './Modal.module.scss';
import classNames from 'classnames';
import {ButtonIcon} from '../Button';
import {useModal} from '../../lib/hooks/useModal';

type ModalSize = 's' | 'm' | 'l'

export interface ModalProps {
  className?: string;
  children: ReactNode;
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  lazy?: boolean;
  size?: ModalSize
}

const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy = true,
    title,
    size = 'm'
  } = props;

  const {theme} = useTheme();
  const {
    closeHandler,
    isClosing,
    isMounted,
    onContentClick,
    onButtonClick
  } = useModal({
    onClose,
    isOpen
  });


  const mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  const sizes = {
    [cls.sizeS]: size === 's',
    [cls.sizeM]: size === 'm',
    [cls.sizeL]: size === 'l',
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className, theme])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={classNames(cls.content, sizes)} onClick={onContentClick}>
            <div className={classNames(cls.header)}>
              {title && title}
              <ButtonIcon onClick={onButtonClick} className={cls.headerBtn}/>
            </div>
            <div className={cls.body}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

Modal.displayName = 'Modal';
export {Modal};

