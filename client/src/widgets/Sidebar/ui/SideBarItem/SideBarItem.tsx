import {memo} from 'react';
import cls from './SideBarItem.module.scss';
import {SidebarItemType} from '../../model/types/sidebar';
import {Link} from 'react-router-dom';
import {ProjectLanguages} from 'shared/lib/types';

interface SideBarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
  currentLanguage: ProjectLanguages
}

export const SideBarItem = memo((props: SideBarItemProps) => {
  const {item, currentLanguage = 'ru', collapsed} = props;
  const {path = '/', text, Icon, height = 30, width = 30} = item;

  return (
    <Link className={cls.SidebarItem} to={path}>
      {collapsed ? <Icon width={width} height={height}/> : text[currentLanguage]}
    </Link>
  );
});
