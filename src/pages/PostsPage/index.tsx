import { Layout, Button } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CreateItemPopup } from '../../components/popup/CreateItemPopup';
import { PostList } from '../../components/post/PostList';
import { AppDispatch } from '../../redux';
import { postActions } from '../../redux/post/reducer';
import { Post } from '../../types/post';

const { Content, Header } = Layout;

export const PostsPage: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const handleSubmit = (value: Post) => {
    const id = 2;
    console.log(value);
    dispatch(
      postActions.createPost({
        post: { ...value },
        id: id,
      })
    );
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  return (
    <div>
      <Layout>
        <Header
          style={{
            height: '10vh',
            backgroundColor: '#221f1f',
            alignContent: 'center',
          }}
        >
          <Button
            type='primary'
            htmlType='submit'
            onClick={openCreateModal}
            style={{ marginRight: '2%' }}
          >
            Create Post
          </Button>
        </Header>
        <Content
          style={{ padding: '48px', height: '100%', backgroundColor: 'white' }}
        >
          <PostList />
        </Content>
      </Layout>
      {isCreateModalOpen && (
        <CreateItemPopup
          visible={isCreateModalOpen}
          onClose={closeCreateModal}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};
