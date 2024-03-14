import {memo} from 'react';
import {Typography} from 'shared/ui/Typography';
import cls from './TextBlock.module.scss';
import {PostTextBlock} from '../../../types/post';
import classNames from 'classnames';

interface Props {
  className?: string;
  block: PostTextBlock;
}

export const TextBlock = memo((props: Props) => {
  const {className, block} = props;

  return (
    <div className={classNames(className)}>
      {block.title && (
        <Typography.Text rootClassName={cls.title}>{block.title}</Typography.Text>
      )}
      {block.paragraphs.map((paragraph) => (
        <Typography.Text key={paragraph} rootClassName={cls.paragraph}>{paragraph} </Typography.Text>
      ))}
    </div>
  );
});
