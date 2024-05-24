import { Button, Card } from 'antd';
import { useDispatch } from 'react-redux';
import { postActions } from '../../redux/post/reducer';
import { Post } from '../../types/post';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../redux';

export const PostItem: React.FC<{
  post: Post;
  isCommentsPage?: boolean;
}> = ({ post, isCommentsPage = true }) => {
  const { id, title, body } = post;
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const toPostComments = () => {
    dispatch(postActions.getPostComments({ post, navigate }));
  };

  const deletePost = () => {
    console.log('delete');
    dispatch(postActions.deletePost({ post }));
  };

  return (
    <Card hoverable title={title}>
      <div style={{ textAlign: 'center', fontSize: 16 }}>{body}</div>
      {isCommentsPage ? (
        <Button onClick={toPostComments} type='primary'>
          Details
        </Button>
      ) : (
        <div>
          <Button onClick={toPostComments} type='primary'>
            Edit
          </Button>
          <Button onClick={deletePost} type='primary'>
            Delete
          </Button>
        </div>
      )}
    </Card>
  );
};
