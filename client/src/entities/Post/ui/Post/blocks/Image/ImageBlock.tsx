import {memo} from 'react';
import {Typography} from 'shared/ui/Typography';
import cls from './ImageBlock.module.scss';
import {PostImageBlock} from '../../../../types/post';

interface Props {
  className?: string;
  block: PostImageBlock;
}

export const ImageBlock = memo((props: Props) => {
  const {className, block} = props;

  return (
    <div className={className}>
      <img src={block.src} alt={block.title} className={cls.img}/>
      {block.title && (
        <Typography.Text>
          {block.title}
        </Typography.Text>
      )}
    </div>
  );
});
