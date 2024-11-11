import {Avatar} from './Avatar';
import {memo} from 'react';

interface Props {
  className?: string;
}

export const DefaultAvatar = memo((props: Props) => {
  const {className = ''} = props;

  return (
    <Avatar className={className}
      src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f4c714111798807.600884d44903d.jpg"/>
  );
});
