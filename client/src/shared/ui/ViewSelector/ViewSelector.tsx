import {memo, useCallback} from 'react';
import cls from './ViewSelector.module.scss';
import classNames from 'classnames';
import {Button} from '../Button';
import {SvgReactComponent} from 'shared/lib/types';

export interface ViewType<T> {
  view: T,
  icon: SvgReactComponent,
}

interface ViewSelectorProps<T> {
  rootClassName?: string;
  iconClassName?: string;
  currentView: T,
  viewTypes: ViewType<T>[]
  onChangeView: (view: T) => void;
}

const Selector = <T, >(props: ViewSelectorProps<T>) => {
  const {rootClassName, iconClassName, currentView, viewTypes, onChangeView} = props;

  const onClick = useCallback((view: T) => {
    onChangeView(view);
  }, [onChangeView]);

  return (
    <div className={classNames(cls.ViewSelector, rootClassName)}>
      {viewTypes.map((viewType, i) => (
        <Button
          variant='clear'
          onClick={onClick.bind(null, viewType.view)}
          key={i}
        >
          {<viewType.icon
            className={classNames(cls.icon, iconClassName, {[cls.notSelected]: viewType.view !== currentView})}/>}
        </Button>
      ))}
    </div>
  );
};

export const ViewSelector = memo(Selector) as typeof Selector;
