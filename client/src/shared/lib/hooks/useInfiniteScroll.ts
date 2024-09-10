import {MutableRefObject, useEffect, useRef, useState} from 'react';
import {useThrottle} from './useThrottle';

export interface UseInfiniteScrollOptions {
  callback?: () => void;
  skipCallback?: boolean;
  triggerRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({callback, triggerRef, skipCallback = false}: UseInfiniteScrollOptions) {
  const observer = useRef<IntersectionObserver | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const onScroll = useThrottle(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setScrollPosition(scrollTop);
  }, 500);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  useEffect(() => {
    const triggerElement = triggerRef.current;

    if (callback) {
      const options: IntersectionObserverInit = {
        root: window.document,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !skipCallback) {
          callback();
          window.scrollTo({top: scrollPosition});
        }
      }, options);

      if (observer?.current && triggerElement) {
        observer?.current?.observe(triggerElement);
      }
    }

    return () => {
      if (observer.current && triggerElement) {
        observer.current.unobserve(triggerElement);
      }
    };
  }, [callback, scrollPosition, skipCallback, triggerRef]);
}
