import {MouseEvent, MutableRefObject, useCallback, useEffect, useRef, useState} from 'react';

interface useModalProps {
  onClose?: () => void;
  isOpen?: boolean;
  animationDelay?: number;

}

export const useModal = (props: useModalProps) => {
  const {animationDelay = 300, onClose, isOpen} = props;
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

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
      }, animationDelay);
    }
  }, [animationDelay, onClose]);

  const onKeyDown = useCallback((evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  const onContentClick = (evt: MouseEvent) => {
    evt.stopPropagation();
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

  return {
    closeHandler,
    isClosing,
    isMounted,
    onContentClick,
    onButtonClick
  };
};