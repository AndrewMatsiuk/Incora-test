import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux';
import { postActions } from '../../redux/post/reducer';
import { CommentItem } from './CommentItem';

export const CommentList: React.FC<{ postId: number | null }> = ({
  postId,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const comments = useSelector(
    (state: RootState) => state.postReducer.comments
  );

  useEffect(() => {
    if (postId && typeof +postId === 'number') {
      dispatch(postActions.getPostComments({ postId: +postId }));
    }
  }, [postId]);

  return (
    <div>
      <div style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bolder' }}>
        Comments:
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
