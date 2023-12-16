import {Link, Outlet} from "react-router-dom";
import cls from './LayoutAuthorized.module.scss';

const LayoutAuthorized = () => {
    return (
        <div className={cls.layout}>
            Primary Authorized Layout
            <Link to={'about'}>About</Link>
            <Link to={'posts'}>Posts</Link>
            <Outlet/>
        </div>
    );
};

export default LayoutAuthorized;
