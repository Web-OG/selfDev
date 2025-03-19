import React, {memo} from 'react';
import {Button} from 'shared/ui/Button';
import NotificationIcon from 'shared/assets/svgs/notification.svg';
import {NotificationList} from 'entities/Notification';
import {Popover} from 'shared/ui/Popups';
import cls from './NotificationButton.module.scss';
import classNames from 'classnames';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const {className} = props;

  return (
    <Popover
      className={classNames(cls.NotificationButton, {}, [className])}
      direction="bottom left"
      trigger={(
        <Button variant='clear'>
          <NotificationIcon/>
        </Button>
      )}
    >
      <NotificationList className={cls.notifications}/>
    </Popover>
  );
});
