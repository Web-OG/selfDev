import {createContext, memo, ReactNode, useContext, useEffect, useMemo, useRef, useState} from 'react';

type Spring = typeof import('@react-spring/web');
type Gesture = typeof import('@use-gesture/react');

interface AnimationContextProps {
  Spring?: Spring,
  Gesture?: Gesture,
  isAnimationLoaded?: boolean
}

interface AnimationProviderProps {
  children: ReactNode
}

const AnimationContext = createContext<AnimationContextProps>({});
export const useAnimationLibs = () => {
  return useContext(AnimationContext) as Required<AnimationContextProps>;
};
const AnimationProvider = (props: AnimationProviderProps) => {
  const {children} = props;
  const SpringRef = useRef<Spring>();
  const GestureRef = useRef<Gesture>();
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      await Promise.all([
        import('@react-spring/web'),
        import('@use-gesture/react'),
      ]).then(([Spring, Gesture]) => {
        setIsAnimationLoaded(true);
        SpringRef.current = Spring;
        GestureRef.current = Gesture;
      });
    };

    void load();
  }, []);

  const value = useMemo(() => ({
    Spring: SpringRef.current,
    Gesture: GestureRef.current,
    isAnimationLoaded
  }), [isAnimationLoaded]);

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};

AnimationProvider.displayName = 'AnimationProvider';
export {AnimationProvider};