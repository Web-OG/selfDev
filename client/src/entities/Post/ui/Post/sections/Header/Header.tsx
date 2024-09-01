import {memo} from 'react';
import cls from 'entities/Post/ui/Post/Post.module.scss';
import {Typography} from 'shared/ui/Typography';
import EyeIcon from 'shared/assets/svgs/eye.svg';
import CalendarIcon from 'shared/assets/svgs/calendar.svg';
import {PostEntity} from 'entities/Post';

interface HeaderProps {
  post: PostEntity;
}

const Header = memo((props: HeaderProps) => {
  const {post} = props;

  return (
    <>
      <div className={cls.avatarWrapper}>
        <img className={cls.avatar} src={post?.img} alt=''/>
      </div>
      <Typography.Text
        rootClassName={cls.title}
        fontSize='fs-title'
        strong
      >
        {post?.title}
      </Typography.Text>
      <Typography.Text
        rootClassName={cls.subtitle}
        fontSize='fs-accent'
        strong
      >
        {post?.subtitle}
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
    </>
  );
});

Header.displayName = 'Header';
export {Header};