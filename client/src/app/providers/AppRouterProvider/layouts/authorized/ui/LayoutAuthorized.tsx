import {Outlet} from "react-router-dom";
import cls from './LayoutAuthorized.module.scss';
import {Header} from "widgets/Header";

const LayoutAuthorized = () => {
  return (
    <div className={cls.layout}>
      <Header isAuth={true}/>
      <Outlet/>
    </div>
  );
};

export default LayoutAuthorized;
