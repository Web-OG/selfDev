import cls from './PageLoader.module.scss';
import {Loader} from 'shared/ui/Loader/Loader';
import classNames from 'classnames';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = (props: PageLoaderProps) => {
  const {className} = props;

  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader/>
    </div>
  );
};
