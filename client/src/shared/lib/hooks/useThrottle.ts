import {useCallback, useRef} from 'react';


export function useThrottle(callback: (...args: any[]) => void, delay: number) { //eslint-disable-line
  const throttleRef = useRef(false);

  return useCallback((...args: any[]) => { //eslint-disable-line
    if (!throttleRef.current) {
      callback(...args);
      throttleRef.current = true;

      setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    }
  }, [callback, delay]);
}
