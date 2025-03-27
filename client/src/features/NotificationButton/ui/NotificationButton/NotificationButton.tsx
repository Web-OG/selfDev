import React, {memo, useCallback, useState} from 'react';
import {Button} from 'shared/ui/Button';
import NotificationIcon from 'shared/assets/svgs/notification.svg';
import {NotificationList} from 'entities/Notification';
import {Popover} from 'shared/ui/Popups';
import cls from './NotificationButton.module.scss';
import {BrowserView, MobileView} from 'react-device-detect';
import {Drawer} from '../../../../shared/ui/Drawer';


export const NotificationButton = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <Button variant='clear' onClick={onOpenDrawer}>
      <NotificationIcon/>
    </Button>
  );

  return (
    <div>
      <BrowserView>
        <Popover
          direction="bottom left"
          trigger={trigger}
        >
          <NotificationList className={cls.notifications}/>
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList/>
        </Drawer>
      </MobileView>
    </div>
  );
});
