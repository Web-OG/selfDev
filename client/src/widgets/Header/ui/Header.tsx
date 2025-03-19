import cls from './Header.module.scss';
import classNames from 'classnames';
import {Logo} from 'shared/ui/Logo/Logo';
import {UserMenu} from 'widgets/UserMenu';
import {NotificationButton} from 'features/NotificationButton';
import {Row} from 'shared/ui/Flex';

interface Props {
  authed?: boolean
}

export const Header = (props: Props) => {
  const {authed = false} = props;

  return (
    <div className={cls.Header}>
      <div className={classNames(cls.container, 'container')}>
        <Logo/>
        <Row alignItems='center' gap="8">
          <NotificationButton/>
          <UserMenu authed={authed}/>
        </Row>
      </div>
    </div>
  );
};