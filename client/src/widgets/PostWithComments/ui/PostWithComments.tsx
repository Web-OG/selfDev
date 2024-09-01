import {memo} from 'react';
import cls from './PostWithComments.module.scss';
import {useParams} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {PostDetails} from 'features/PostDetails';
import {Typography} from 'shared/ui/Typography';
import {PostComments} from 'features/PostComments';

const PostWithComments = memo(() => {
  const {id} = useParams<{ id: string }>();
  const {t} = useTranslation();

  return (
    <div className={cls.wrapper}>
      <PostDetails id={id}/>
      <Typography.Text fontSize={'fs-accent'} strong>
        {t('Комментарии')}
      </Typography.Text>
      {/*<AddCommentForm onSendComment={onSendComment}/>*/}
      <PostComments postId={id}/>
    </div>
  );
});

PostWithComments.displayName = 'PostWithComments';
export {PostWithComments};