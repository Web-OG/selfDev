import cls from './Header.module.scss';
import classNames from 'classnames';
import {Logo} from 'shared/ui/Logo/Logo';
import {UserMenu} from 'widgets/UserMenu';

interface Props {
  authed?: boolean
}

export const Header = (props: Props) => {
  const {authed = false} = props;

  return (
    <div className={cls.Header}>
      <div className={classNames(cls.container, 'container')}>
        <Logo/>
        <UserMenu authed={authed}/>
      </div>
    </div>
  );
};