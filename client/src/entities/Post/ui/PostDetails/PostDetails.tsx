import {useTranslation} from 'react-i18next';
import {memo, useCallback} from 'react';
import {Typography} from 'shared/ui/Typography';
import {Skeleton} from 'shared/ui/Skeleton/Skeleton';
import {Avatar} from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/svgs/eye.svg';
import CalendarIcon from 'shared/assets/svgs/calendar.svg';
import cls from './PostDetails.module.scss';
import {CodeBlock} from 'entities/Post/ui/blocks/Code/CodeBlock';
import {Post, PostBlock} from 'entities/Post/types/post';
import {ImageBlock} from 'entities/Post/ui/blocks/Image/ImageBlock';
import {TextBlock} from 'entities/Post/ui/blocks/Text/TextBlock';
import classNames from 'classnames';

interface Props {
  className?: string;
  error?: string;
  isLoading: boolean,
  post: Post
}

export const PostDetails = memo((props: Props) => {
  const {className, post, isLoading, error} = props;
  const {t} = useTranslation();

  const renderBlock = useCallback((block: PostBlock) => {
    switch (block.type) {
    case 'code':
      return (
        <CodeBlock
          key={block.id}
          block={block}
          className={cls.block}
        />
      );
    case 'image':
      return (
        <ImageBlock
          key={block.id}
          block={block}
          className={cls.block}
        />
      );
    case 'text':
      return (
        <TextBlock
          key={block.id}
          className={cls.block}
          block={block}
        />
      );
    default:
      return null;
    }
  }, []);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%"/>
        <Skeleton className={cls.title} width={300} height={32}/>
        <Skeleton className={cls.skeleton} width={600} height={24}/>
        <Skeleton className={cls.skeleton} width="100%" height={200}/>
        <Skeleton className={cls.skeleton} width="100%" height={200}/>
      </>
    );
  } else if (error) {
    content = (
      <Typography.Text>
        {t('Произошла ошибка при загрузке поста.')}
      </Typography.Text>
    );
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar
            size={200}
            src={post?.img}
            className={cls.avatar}
          />
        </div>
        <Typography.Text
          rootClassName={cls.title}
          fontSize='fs-accent'
        >
          <>
            title={post?.title}
            text={post?.subtitle}
          </>
        </Typography.Text>
        <div className={cls.postInfo}>
          <EyeIcon/>
          <Typography.Text>
            {String(post?.views)}
          </Typography.Text>
        </div>
        <div className={cls.postInfo}>
          <CalendarIcon/>
          <Typography.Text>
            {post?.createdAt}
          </Typography.Text>
        </div>
        {post?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <div className={classNames(cls.postDetails, className)}>
      {content}
    </div>
  );
});
