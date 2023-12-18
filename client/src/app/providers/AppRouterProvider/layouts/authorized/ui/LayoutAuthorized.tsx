import {Outlet} from "react-router-dom";
import cls from './LayoutAuthorized.module.scss';
import {Header} from "widgets/Header";
import {Sidebar} from "widgets/Sidebar";
import {Footer} from "widgets/Footer";

const LayoutAuthorized = () => {
  return (
    <div className={cls.layout}>
      <Header isAuth={true}/>
      <div className={cls.container}>
        <Sidebar/>
        <Outlet/>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutAuthorized;
