import React from 'react';
import {MultiLanguageMassage} from 'shared/lib/types';
import {RoutePaths} from 'app/providers/AppRouter';

export interface SidebarItemType {
  path: RoutePaths;
  text: MultiLanguageMassage;
  Icon: React.FunctionComponent<React.SVGProps<SVGElement>>;
  width?: number;
  height?: number;
}
