import {memo} from 'react';
import {Skeleton} from '@/shared/ui/Skeleton';
import cls from './ListItem.module.scss';
import {PostView} from '@/entities/Post';
import classNames from 'classnames';

interface Props {
  className?: string;
  view: PostView;
}

export const ListItemSkeleton = memo((props: Props) => {
  const {className, view} = props;

  if (view === 'big') {
    return (
      <div className={classNames([className, cls[view]])}>
        <div className={cls.card}>
          <div className={cls.header}>
            <Skeleton border="50%" height={30} width={30}/>
            <Skeleton width={150} height={16} className={cls.username}/>
            <Skeleton width={150} height={16} className={cls.date}/>
          </div>
          <Skeleton width={250} height={24} className={cls.title}/>
          <Skeleton height={200} className={cls.img}/>
          <div className={cls.footer}>
            <Skeleton height={36} width={200}/>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames([className, cls[view]])}>
      <div className={cls.card}>
        <div className={cls.imageWrapper}>
          <Skeleton width={200} height={200} className={cls.img}/>
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16}/>
        </div>
        <Skeleton width={150} height={16} className={cls.title}/>
      </div>
    </div>
  );
});
