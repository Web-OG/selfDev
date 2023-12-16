import { Outlet} from "react-router-dom";
import cls from './LayoutUnAuthorized.module.scss';

const LayoutUnAuthorized = () => {
    return (
        <div className={cls.layout}>
            UnAuthorized Layout
            <Outlet/>
        </div>
    );
};

export default LayoutUnAuthorized;
