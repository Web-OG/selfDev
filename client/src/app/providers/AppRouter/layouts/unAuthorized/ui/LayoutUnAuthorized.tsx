import {Outlet, ScrollRestoration} from 'react-router-dom';
import cls from '../../layout.module.scss';
import {Header} from 'widgets/Header';
import {Footer} from 'widgets/Footer';

const LayoutUnAuthorized = () => {
  return (
    <div className={cls.layout}>
      <Header/>
      <div className={'container'}>
        <div className={cls.outlet}>
          <Outlet/>
        </div>
      </div>
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}/>
      <Footer/>
    </div>
  );
};

export default LayoutUnAuthorized;
