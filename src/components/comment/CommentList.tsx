import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { PostItem } from '../post/PostItem';
import { CommentItem } from './CommentItem';

export const CommentList: React.FC = () => {
  const comments = useSelector(
    (state: RootState) => state.postReducer.comments
  );
  const post = useSelector((state: RootState) => state.postReducer.posts);
  return (
    <div>
      <PostItem post={post[comments[0].postId - 1]} isCommentsPage={false} />
      <div style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bolder' }}>
        Comments
      </div>
      <Row gutter={[16, 16]}>
        {comments.map((comment) => (
          <Col span={12} key={comment.id}>
            <CommentItem comment={comment} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
