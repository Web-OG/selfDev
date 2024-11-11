import {useTranslation} from 'react-i18next';
import {memo, useCallback} from 'react';
import {Typography} from 'shared/ui/Typography';
import {Avatar} from 'shared/ui/Avatar/Avatar';
import {Button} from 'shared/ui/Button';
import {useNavigate} from 'react-router-dom';
import cls from './ListItem.module.scss';
import {PostEntity, PostTextBlock, PostView} from '../../types/post';
import {TextBlock} from '../Post/blocks/Text/TextBlock';
import classNames from 'classnames';
import EyeIcon from 'shared/assets/svgs/eye.svg';

interface Props {
  className?: string;
  post: PostEntity;
  view: PostView;
}

export const ListItem = memo((props: Props) => {
  const {className, post, view} = props;
  const {t} = useTranslation();
  const navigate = useNavigate();

  const onOpen = useCallback(() => {
    navigate('/posts/' + post._id);
  }, [post._id, navigate]);

  const types = <Typography.Text rootClassName={cls.types}>{post?.type?.join(', ')}</Typography.Text>;
  const views = (
    <>
      <Typography.Text rootClassName={cls.views}>{String(post.views)}</Typography.Text>
      <EyeIcon/>
    </>
  );

  if (view === 'big') {
    const textBlock = post.blocks.find(
      (block) => block.type === 'text',
    ) as PostTextBlock;

    return (
      <div className={classNames(className, cls[view])}>
        <div className={cls.card}>
          <div className={cls.header}>
            {post?.author?.avatar ? <Avatar size={30} src={post.author.avatar}/> : <div/>}
            {post?.author?.username &&
              <Typography.Text rootClassName={cls.username}>{post.author.username}</Typography.Text>}
            <Typography.Text rootClassName={cls.date}>{post.createdAt}</Typography.Text>
          </div>
          <Typography.Text rootClassName={cls.title}>{post.title}</Typography.Text>
          {types}
          <img src={post.img} className={cls.img} alt={post.title}/>
          {textBlock && (
            <TextBlock block={textBlock} className={cls.textBlock}/>
          )}
          <div className={cls.footer}>
            <Button onClick={onOpen} variant={'outlined'}>
              {t('Читать далее...')}
            </Button>
            {views}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames({}, [className, cls[view]])}>
      <div className={cls.card} onClick={onOpen}>
        <div className={cls.imageWrapper}>
          <img alt={post.title} src={post.img} className={cls.img}/>
          <Typography.Text rootClassName={cls.date}>{post.createdAt}</Typography.Text>
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Typography.Text rootClassName={cls.title}>{post.title}</Typography.Text>
      </div>
    </div>
  );
});
