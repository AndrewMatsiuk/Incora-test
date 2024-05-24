import { Button, Card } from 'antd';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux';
import { postActions } from '../../redux/post/reducer';
import { User } from '../../types/user';
import { useNavigate } from 'react-router-dom';

export const UserItem: React.FC<{ user: User }> = ({ user }) => {
  const { id, name, username, email, address, phone, website, company } = user;
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const toUserPosts = () => {
    dispatch(postActions.getPostsUser({ user, navigate }));
  };
  return (
    <Card hoverable title={name}>
      <div style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: 16 }}>
        {username}
      </div>
      <div>{email}</div>
      <div>{phone}</div>
      <div>{website}</div>
      <Button onClick={toUserPosts} type='primary'>
        Posts
      </Button>
    </Card>
  );
};
