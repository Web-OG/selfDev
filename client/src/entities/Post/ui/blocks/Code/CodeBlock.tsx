import {memo} from 'react';
import {Code} from 'shared/ui/Code/Code';
import cls from './CodeBlock.module.scss';
import {PostCodeBlock} from '../../../types/post';
import classNames from 'classnames';

interface Props {
  className?: string;
  block: PostCodeBlock;
}

export const CodeBlock = memo((props: Props) => {
  const {className, block} = props;

  return (
    <div className={classNames(cls.codeBlock, {}, [className])}>
      <Code text={block.code}/>
    </div>
  );
});
