import {MutableRefObject, useEffect, useRef} from 'react';

export interface UseInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({callback, triggerRef}: UseInfiniteScrollOptions) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const triggerElement = triggerRef.current;

    if (callback) {
      const options: IntersectionObserverInit = {
        root: window.document,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
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
  }, [callback, triggerRef]);
}
