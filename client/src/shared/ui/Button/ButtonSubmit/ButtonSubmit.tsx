import {memo, ReactNode} from 'react';
import {Loader} from 'shared/ui/Loader';
import {Button, ButtonProps} from '../Button/Button';

interface ButtonSubmitProps extends ButtonProps {
  className?: string;
  isSending: boolean;
  children: ReactNode
}

const ButtonSubmit = memo((props: ButtonSubmitProps) => {
  const {className, isSending, children, ...otherProps} = props;

  return (
    <Button className={className} type="submit" {...otherProps}>
      {isSending ? <Loader onSecondary/> : children}
    </Button>
  );
});

ButtonSubmit.displayName = 'ButtonSubmit';
export {ButtonSubmit};