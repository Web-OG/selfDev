import {
  MutableRefObject,
  ReactNode,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import {Portal} from 'shared/ui/Portal/Portal';
import {useTheme} from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';
import classNames from 'classnames';
import {ButtonIcon} from 'shared/ui/Button';

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

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy = true,
    title,
    size = 'm'
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
  const {theme} = useTheme();

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }

    return () => {
      setIsMounted(false);
    };
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const onButtonClick = useCallback(() => {
    closeHandler();
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

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

