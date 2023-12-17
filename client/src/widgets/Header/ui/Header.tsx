import cls from './Header.module.scss'
import classNames from "classnames";
import {Logo} from "shared/ui/Logo/Logo";
import {UserMenu} from "widgets/UserMenu";

interface Props {
  isAuth: boolean
}

export const Header = ({isAuth}: Props) => {
  if (isAuth) {
    return (
      <div className={cls.Header}>
        <div className={classNames(cls.container, 'container')}>
          <Logo/>
          <UserMenu/>
        </div>
      </div>
    )
  }

  return (
    <div>
      NoAuth
    </div>
  );
};