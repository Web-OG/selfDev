import {memo, useEffect} from 'react';
import {CommentList} from 'entities/Comment';
import {useSelector} from 'react-redux';
import {ReducersList, useAppDispatch, useReducerManager} from 'app/providers/StoreProvider';
import {selectComments} from '../model/selectors';
import {getPostCommentsById} from '../model/services/getPostCommentsById';
import {postCommentsReducer} from '../model/slices/postCommentsSlice';

interface PostCommentsProps {
  postId: string | undefined;
}

const initialReducers: ReducersList = {
  postComments: postCommentsReducer
};

const PostComments = memo((props: PostCommentsProps) => {
  const {postId} = props;
  const dispatch = useAppDispatch();
  const comments = useSelector(selectComments);
  const {isReducersInit} = useReducerManager(initialReducers);

  useEffect(() => {
    if (postId) {
      dispatch(getPostCommentsById(postId));
    }
  }, [dispatch, postId]);

  if (isReducersInit) {
    return (
      <CommentList comments={comments}/>
    );
  } else return null;
});

PostComments.displayName = 'PostComments';
export {PostComments};