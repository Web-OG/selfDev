import React, {memo, ReactNode, useCallback, useEffect} from 'react';
import {Overlay} from '../Overlay/Overlay';
import cls from './Drawer.module.scss';
import {Portal} from '../Portal';
import {useTheme} from '../../providers/ThemeProvider';
import classNames from 'classnames';
import {AnimationProvider, useAnimationLibs} from '../../providers/AnimationProvider';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const height = window.innerHeight - 100;

export const DrawerContent = memo((props: DrawerProps) => {
  const {Spring, Gesture} = useAnimationLibs();
  const [{y}, api] = Spring.useSpring(() => ({y: height}));
  const {theme} = useTheme();
  const {
    className,
    children,
    onClose,
    isOpen,
  } = props;

  const openDrawer = useCallback(() => {
    api.start({y: 0, immediate: false});
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [api, isOpen, openDrawer]);

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: {...Spring.config.stiff, velocity},
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openDrawer();
        }
      } else {
        api.start({y: my, immediate: true});
      }
    },
    {
      from: () => [0, y.get()], filterTaps: true, bounds: {top: 0}, rubberband: true,
    },
  );

  if (!isOpen) {
    return null;
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  return (
    <Portal>
      <div className={classNames(cls.Drawer, {}, [className, theme, 'app_drawer'])}>
        <Overlay onClick={close}/>
        <Spring.a.div
          className={cls.sheet}
          style={{display, bottom: `calc(-100vh + ${height - 100}px)`, y}}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
});

const DrawerProvider = memo((props: DrawerProps) => {
  const {isAnimationLoaded} = useAnimationLibs();

  if (!isAnimationLoaded) {
    return null;
  }

  return <DrawerContent {...props} >
    {props.children}
  </DrawerContent>;
});


const Drawer = memo((props: DrawerProps) => {
  return <AnimationProvider>
    <DrawerProvider {...props}>{props.children}</DrawerProvider>
  </AnimationProvider>;
});

Drawer.displayName = 'Drawer';
export {Drawer};