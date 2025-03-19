import React from 'react';
import cls from './Flex.module.scss';
import classNames from 'classnames';

export interface FlexProps {
  rootClassName?: string;
  children: React.ReactNode;
  direction?: 'row' | 'column';
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch';
  flexWrap?: 'wrap' | 'nowrap';
  alignContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  gap?: '8' | '16' | '24' | '32' | '40' | '48' | '56' | '64';
  fullWidth?: boolean
}

const Flex = (props: FlexProps) => {
  const {
    rootClassName,
    children,
    direction,
    justifyContent,
    alignItems,
    flexWrap,
    alignContent,
    gap,
    fullWidth
  } = props;

  const className = [
    rootClassName && rootClassName,
    cls.flex,
    direction && cls[`flex-${direction}`],
    justifyContent && cls[`justifyContent_${justifyContent}`],
    alignItems && cls[`alignItems_${alignItems}`],
    flexWrap && cls[`flexWrap_${flexWrap}`],
    alignContent && cls[`alignContent_${alignContent}`],
    gap && cls[`gap_${gap}`],
    fullWidth && cls.fullWidth
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames(className)}>
      {children}
    </div>
  );
};

Flex.displayName = 'Flex';
export {Flex};