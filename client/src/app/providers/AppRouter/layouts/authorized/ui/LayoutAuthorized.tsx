import {Outlet, ScrollRestoration} from 'react-router-dom';
import cls from '../../layout.module.scss';
import {Header} from '@/widgets/Header';
import {Sidebar} from '@/widgets/Sidebar';
import {Footer} from '@/widgets/Footer';

const LayoutAuthorized = () => {
  return (
    <div className={cls.layout}>
      <Header authed/>
      <div className={cls.container}>
        <Sidebar/>
        <div className={cls.outlet}>
          <Outlet/>
        </div>
      </div>
      <ScrollRestoration/>
      <Footer/>
    </div>
  );
};

export default LayoutAuthorized;
