import cls from './PageLoader.module.scss';
import {Loader} from '../Loader';
import classNames from 'classnames';

interface PageLoaderProps {
  className?: string;
}

const PageLoader = (props: PageLoaderProps) => {
  const {className} = props;

  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader/>
    </div>
  );
};

PageLoader.displayName = 'PageLoader';
export {PageLoader};
