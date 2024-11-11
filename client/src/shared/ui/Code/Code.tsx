import {memo, useCallback} from 'react';
import {Button} from '../Button';
import CopyIcon from 'shared/assets/svgs/copy.svg';
import cls from './Code.module.scss';
import classNames from 'classnames';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const {className, text} = props;

  const onCopy = useCallback(() => {
    void navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, className)}>
      <code>
        {text}
      </code>
      <Button onClick={onCopy} className={cls.copyBtn} variant='outlined'>
        <CopyIcon className={cls.copyIcon}/>
      </Button>
    </pre>
  );
});
