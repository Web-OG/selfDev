import {memo} from 'react';
import {Typography} from '@/shared/ui/Typography';
import {Skeleton} from '@/shared/ui/Skeleton/Skeleton';
import cls from './CommentCard.module.scss';
import {Comment} from '@/entities/Comment';
import classNames from 'classnames';
import {ProfileRoutes} from '@/app/providers/AppRouter';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const {className, comment, isLoading} = props;
  const profilePath: ProfileRoutes<string> = 'profile/';

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%"/>
          <Skeleton height={16} width={100} className={cls.username}/>
        </div>
        <Skeleton className={cls.text} width="100%" height={50}/>
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <Typography.Link to={`/${profilePath}${comment.authorId._id}`} className={cls.header}>
        {/*{comment.authorId.avatar ? <Avatar size={30} src={comment.user.avatar}/> : null}*/}
        <Typography.Text rootClassName={cls.username}>
          {comment.authorId.username}
        </Typography.Text>
      </Typography.Link>
      <Typography.Text rootClassName={cls.text}>
        {comment.content}
      </Typography.Text>
      <Typography.Text>
        Likes: {comment.likes.length || 0}
      </Typography.Text>
    </div>
  );
});
