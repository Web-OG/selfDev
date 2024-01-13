import {memo, useState} from 'react';
import cls from './Sidebar.module.scss';
import classNames from 'classnames';
import {Button} from 'shared/ui/Button/Button';
import {Link} from 'react-router-dom';
import {LangSwitcher} from 'features/LangSwitcher';
import {ThemeSwitcher} from 'features/ThemeSwitcher';
import AboutIcon from 'shared/assets/svgs/about.svg';
import PostsIcon from 'shared/assets/svgs/posts.svg';

const Sidebar = memo(() => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div data-testid="Sidebar" className={classNames(cls.Sidebar, {[cls.SidebarCollapsed]: collapsed},)}>
      <div className={cls.links}>
        <Link className={cls.SidebarItem} to={'/about'}>{collapsed ? <AboutIcon width={30} height={30}/> : 'About'}</Link>
        <Link className={cls.SidebarItem} to={'/posts'}>{collapsed ? <PostsIcon width={40} height={40}/> : 'Posts'}</Link>
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