import {Link, Outlet} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            MainPage
            <Link to={'about'}>About</Link>
            <Link to={'posts'}>Posts</Link>
            <Outlet />
        </div>
    );
};

export default MainPage;
