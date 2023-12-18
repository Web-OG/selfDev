import {memo} from 'react';
import cls from './Sidebar.module.scss'

const Sidebar = memo(() => {
  return (
    <div className={cls.Sidebar}>
      <div className={cls.SidebarItem}>
        Sidebar item 1
      </div>
      <div className={cls.SidebarItem}>
        Sidebar item 2
      </div>
      <div className={cls.SidebarItem}>
        Sidebar item 3
      </div>

    </div>
  );
});

Sidebar.displayName = 'Sidebar';
export {Sidebar};