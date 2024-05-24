import { Button, Card } from 'antd';
import { useDispatch } from 'react-redux';
import { postActions } from '../../redux/post/reducer';
import { Post } from '../../types/post';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../redux';
import { CreateItemPopup } from '../popup/CreateItemPopup';
import { useState } from 'react';

export const PostItem: React.FC<{
  post: Post;
  isCommentsPage?: boolean;
}> = ({ post, isCommentsPage = true }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const toPostComments = () => {
    navigate(`/post/${post?.id}`);
  };

  const editPost = () => {
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const deletePost = () => {
    console.log('delete');
    dispatch(postActions.deletePost({ post, navigate }));
  };

  const handleSubmit = (value: Post) => {
    dispatch(
      postActions.editPost({
        post: {
          ...value,
          id: post?.id,
        },
      })
    );
  };

  return (
    <Card hoverable title={post?.title}>
      <div style={{ fontSize: 16 }}>{post?.body}</div>
      {isCommentsPage ? (
        <Button
          onClick={toPostComments}
          type='primary'
          style={{ marginTop: 15 }}
        >
          Details
        </Button>
      ) : (
        <div style={{ marginTop: 15 }}>
          <Button onClick={editPost} type='primary' style={{ marginRight: 20 }}>
            Edit
          </Button>
          <Button onClick={deletePost} type='primary'>
            Delete
          </Button>
          {isCreateModalOpen && (
            <CreateItemPopup
              visible={isCreateModalOpen}
              onClose={closeCreateModal}
              onSubmit={handleSubmit}
              post={post}
            />
          )}
        </div>
      )}
    </Card>
  );
};
