import {useTranslation} from 'react-i18next';
import {memo, useCallback} from 'react';
import {Typography} from 'shared/ui/Typography';
import {Skeleton} from 'shared/ui/Skeleton/Skeleton';
import cls from './Post.module.scss';
import {CodeBlock} from 'entities/Post/ui/Post/blocks/Code/CodeBlock';
import {PostEntity, PostBlock} from 'entities/Post/types/post';
import {ImageBlock} from 'entities/Post/ui/Post/blocks/Image/ImageBlock';
import {TextBlock} from 'entities/Post/ui/Post/blocks/Text/TextBlock';
import classNames from 'classnames';
import {Header} from 'entities/Post/ui/Post/sections/Header/Header';

interface Props {
  className?: string;
  error?: string;
  isLoading: boolean,
  post: PostEntity
}

export const Post = memo((props: Props) => {
  const {className, post, isLoading, error} = props;
  const {t} = useTranslation();

  const renderBlock = useCallback((block: PostBlock) => {
    switch (block.type) {
    case 'code':
      return (
        <CodeBlock
          key={block._id}
          block={block}
          className={cls.block}
        />
      );
    case 'image':
      return (
        <ImageBlock
          key={block._id}
          block={block}
          className={cls.block}
        />
      );
    case 'text':
      return (
        <TextBlock
          key={block._id}
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
        <Header post={post}/>
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
