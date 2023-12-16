import "./App.scss";
import {AppRouterProvider} from './providers/AppRouterProvider'
import {useTheme} from "./providers/ThemeProvider";

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <AppRouterProvider isAuth={true} />
        </div>
    )
}

export {App};