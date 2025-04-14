import {memo} from 'react';
import {Typography} from '@/shared/ui/Typography';
import {useTranslation} from 'react-i18next';
import cls from './CommentList.module.scss';
import {CommentCard} from '../CommentCard/CommentCard';
import {Comment} from '@/entities/Comment';
import classNames from 'classnames';

interface CommentListProps {
  className?: string;
  comments?: Comment[] | undefined;
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const {className, isLoading, comments} = props;
  const {t} = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentList, {}, [className])}>
        <CommentCard isLoading/>
        <CommentCard isLoading/>
        <CommentCard isLoading/>
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length
        ? comments.map((comment) => (
          <CommentCard
            className={cls.comment}
            comment={comment}
            key={comment._id}
          />
        ))
        : <Typography.Text>{t('Комментарии отсутствуют')}</Typography.Text>}
    </div>
  );
});
