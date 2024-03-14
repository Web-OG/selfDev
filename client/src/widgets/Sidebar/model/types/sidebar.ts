import {MultiLanguageMassage, SvgReactComponent} from 'shared/lib/types';
import {RoutePaths} from 'app/providers/AppRouter';

export interface SidebarItemType {
  path: RoutePaths;
  text: MultiLanguageMassage;
  Icon: SvgReactComponent;
  width?: number;
  height?: number;
}
