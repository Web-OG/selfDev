import {memo} from 'react';
import {Typography} from '@/shared/ui/Typography';
import cls from './NotificationItem.module.scss';
import {Notification} from '../../model/types/notification';
import classNames from 'classnames';

interface NotificationItemProps {
  className?: string;
  item: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const {className, item} = props;

  const content = (
    <div className={classNames(cls.NotificationItem, {}, [className])}>
      <Typography.Text>{item.title}</Typography.Text>
      <Typography.Text>{item.description}</Typography.Text>
    </div>
  );

  if (item.link) {
    return (
      <a className={cls.link} target="_blank" href={item.link} rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
});
