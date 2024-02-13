import './Loader.scss';
import classNames from 'classnames';

interface LoaderProps {
  className?: string;
  onSecondary?: boolean;
}

const Loader = (props: LoaderProps) => {
  const {className, onSecondary = false} = props;

  return (
    <div className={classNames('lds-ellipsis', {secondary: onSecondary}, className)}>
      <div/>
      <div/>
      <div/>
    </div>
  );
};

Loader.displayName = 'Loader';
export {Loader};
