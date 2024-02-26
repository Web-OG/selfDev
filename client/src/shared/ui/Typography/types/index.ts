import {FontColor} from 'shared/lib/types';
import {MouseEventHandler, ReactNode} from 'react';

export interface TextAndLinkProps {
  rootClassName?: string;
  code?: boolean;
  deleted?: boolean;
  disabled?: boolean;
  keyboard?: boolean;
  mark?: boolean;
  strong?: boolean;
  italic?: boolean;
  underline?: boolean;
  type?: FontColor;
  display?: 'inline' | 'block'
  onClick?: MouseEventHandler;
  children: ReactNode;
}