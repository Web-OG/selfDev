import {useTranslation} from 'react-i18next';
import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
// import { CommentList } from 'entities/Comment';
// import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
// import { AddCommentForm } from 'features/addCommentForm';
import {Button} from '@/shared/ui/Button';
// import {RoutePath} from 'shared/config/routeConfig/routeConfig';
// import { addCommentForPost } from '../../model/services/addCommentForPost/addCommentForPost';
// import {
//   fetchCommentsByPostId,
// } from '../../model/services/fetchCommentsByPostId/fetchCommentsByPostId';
// import cls from './PostPage.module.scss';
import classNames from 'classnames';
import {PostWithComments} from '@/widgets/PostWithComments';
// import { PostDetailsCommentsReducer, getPostComments } from '../../model/slices/PostDetailsCommentsSlice';
// import { getPostCommentsIsLoading } from '../../model/selectors/comments';

interface PostPageProps {
  className?: string;
}

// const reducers: ReducersList = {
//   PostDetailsComments: PostDetailsCommentsReducer,
// };

const PostPage = (props: PostPageProps) => {
  const {className} = props;
  const {t} = useTranslation();

  // const dispatch = useDispatch();
  // const comments = useSelector(getPostComments.selectAll);
  // const commentsIsLoading = useSelector(getPostCommentsIsLoading);
  const navigate = useNavigate();
  const postListRoute = '/posts';


  const onBackToList = useCallback(() => {
    navigate(postListRoute);
  }, [navigate]);

  // const onSendComment = useCallback((text: string) => {
  //   dispatch(addCommentForPost(text));
  // }, [dispatch]);

  // useInitialEffect(() => {
  //   dispatch(fetchCommentsByPostId(id));
  // });


  return (
    <div className={classNames({}, [className])}>
      <Button variant='outlined' onClick={onBackToList}>
        {t('Назад к списку')}
      </Button>
      <PostWithComments/>
    </div>
  );
};

export default PostPage;
