import {memo} from 'react';
import {Column} from 'shared/ui/Flex';
import {Skeleton} from 'shared/ui/Skeleton/Skeleton';
import {useNotifications} from '../../api/notificationApi';
import cls from './NotificationList.module.scss';
import {NotificationItem} from '../NotificationItem/NotificationItem';
import classNames from 'classnames';

interface NotificationListProps {
  className?: string;
  isFullWidth?: boolean;
}

export const NotificationList = memo((props: NotificationListProps) => {
  const {className, isFullWidth} = props;
  const {data, isLoading} = useNotifications(null, {
    pollingInterval: 100000,
  });

  if (isLoading) {
    return (
      <Column
        gap="16"
        rootClassName={cls.NotificationList}
        fullWidth
      >
        <Skeleton width="100%" border="8px" height="80px"/>
        <Skeleton width="100%" border="8px" height="80px"/>
        <Skeleton width="100%" border="8px" height="80px"/>
      </Column>
    );
  }

  return (
    <Column gap="16"
      rootClassName={classNames(cls.NotificationList, {[cls.fullWidth]: isFullWidth}, className)}
      fullWidth
    >
      {data?.map((item) => (
        <NotificationItem key={item._id} item={item}/>
      ))}
    </Column>
  );
});
