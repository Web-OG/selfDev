import {memo, useMemo} from 'react';
import cls from './PostViewSelector.module.scss';
import {PostView} from '@/entities/Post';
import {ViewSelector, ViewType} from '@/shared/ui/ViewSelector';
import ListIcon from '@/shared/assets/svgs/list.svg';
import TiledIcon from '@/shared/assets/svgs/tiled.svg';

interface Props {
  onChangeView: (view: PostView) => void,
  view: PostView
}

const PostViewSelector = memo((props: Props) => {
  const {onChangeView, view} = props;

  const viewTypes: ViewType<PostView>[] = useMemo(() => {
    return [{view: 'small', icon: ListIcon}, {view: 'big', icon: TiledIcon}];
  }, []);

  return (
    <ViewSelector<PostView> iconClassName={cls.icon} onChangeView={onChangeView} currentView={view}
      viewTypes={viewTypes}/>
  );
});

PostViewSelector.displayName = 'PostViewSelector';
export {PostViewSelector};