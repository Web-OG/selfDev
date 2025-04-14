import {memo, useMemo, useState} from 'react';
import cls from './Sidebar.module.scss';
import classNames from 'classnames';
import {Button} from '@/shared/ui/Button/Button/Button';
import {LangSwitcher} from '@/features/LangSwitcher';
import {ThemeSwitcher} from '@/features/ThemeSwitcher';
import {getSidebarItems} from '../model/selectors/getSidebarItems';
import {useSelector} from 'react-redux';
import {getCurrentLanguage} from '@/shared/lib/utils/getCurrentLanguage';
import {SideBarItem} from './SideBarItem/SideBarItem';

const Sidebar = memo(() => {
  const [collapsed, setCollapsed] = useState(true);
  const currentLanguage = getCurrentLanguage();
  const items = useSelector(getSidebarItems);

  const SidebarItems = useMemo(() => {
    return items.map((item, i) => (
      <SideBarItem key={i} item={item} currentLanguage={currentLanguage} collapsed={collapsed}/>
    ));
  }, [collapsed, currentLanguage, items]);

  return (
    <div data-testid="Sidebar" className={classNames(cls.Sidebar, {[cls.SidebarCollapsed]: collapsed})}>
      <div className={cls.links}>
        {SidebarItems}
      </div>
      <div className={cls.switchers}>
        <LangSwitcher short={collapsed}/>
        <ThemeSwitcher/>
      </div>
      <Button className={cls.SidebarButton} data-testid="Sidebar-toggle" onClick={() => setCollapsed(prev => !prev)}>
        {collapsed ? '>' : '<'}
      </Button>
    </div>
  );
});

Sidebar.displayName = 'Sidebar';
export {Sidebar};