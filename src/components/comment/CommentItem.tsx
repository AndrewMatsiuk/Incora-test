import { Card } from 'antd';
import { Comment } from '../../types/comment';

export const CommentItem: React.FC<{ comment: Comment }> = ({ comment }) => {
  const { id, name, email, body } = comment;

  return (
    <Card hoverable title={id}>
      <div style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: 16 }}>
        {email}
      </div>
      <div>{body}</div>
    </Card>
  );
};
