import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CommentList } from '../../components/comment/CommentList';
import { PostItem } from '../../components/post/PostItem';
import { RootState } from '../../redux';
import { Post } from '../../types/post';
const { Content, Header } = Layout;

export const PostDetailsPage: React.FC = () => {
  const { postId } = useParams();
  const posts = useSelector((state: RootState) => state.postReducer.posts);
  const currentPost = posts?.find(
    (post) => postId && post.id === +postId
  ) as Post;

  return (
    <Layout>
      <Header
        style={{
          height: '8vh',
        }}
      >
        <div style={{ position: 'absolute', color: 'white', fontSize: 32 }}>
          Post
        </div>
      </Header>
      <Content
        style={{ padding: '48px', height: '100vh', backgroundColor: '#A9C0E1' }}
      >
        <PostItem post={currentPost} isCommentsPage={false} />
        <CommentList postId={postId ? +postId : null} />
      </Content>
    </Layout>
  );
};
