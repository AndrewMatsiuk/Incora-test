import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { PostItem } from './PostItem';

export const PostList: React.FC = () => {
  const posts = useSelector((state: RootState) => state.postReducer.posts);
  return (
    <Row gutter={[16, 16]}>
      {posts.map((post) => (
        <Col span={12} key={post.id}>
          <PostItem post={post} />
        </Col>
      ))}
    </Row>
  );
};
