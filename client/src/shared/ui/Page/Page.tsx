import {
  memo, MutableRefObject, ReactNode, useRef,
} from 'react';
import {useInfiniteScroll} from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './Page.module.scss';
import classNames from 'classnames';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
  const {className, children, onScrollEnd} = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <div
      ref={wrapperRef}
      className={classNames(cls.Page, className)}
    >
      {children}
      <div ref={triggerRef}/>
    </div>
  );
});
