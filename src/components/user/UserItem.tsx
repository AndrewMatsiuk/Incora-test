import { Button, Card } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../redux';
import { postActions } from '../../redux/post/reducer';
import { User } from '../../types/user';

export const UserItem: React.FC<{ user: User }> = ({ user }) => {
  const { id, name, username, email, phone, website } = user;
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const toUserPosts = () => {
    dispatch(postActions.getPosts({ userId: id }));
    navigate(`/user/${id}`);
  };
  return (
    <Card hoverable title={name} style={{ fontSize: 18 }}>
      <div>{username}</div>
      <div>{email}</div>
      <div>{phone}</div>
      <div>{website}</div>
      <Button onClick={toUserPosts} type='primary' style={{ marginTop: 25 }}>
        Posts
      </Button>
    </Card>
  );
};
