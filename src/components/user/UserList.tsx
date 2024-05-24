import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux';
import { userActions } from '../../redux/user/reducer';
import { useEffect } from 'react';
import { Row, Col } from 'antd';
import { UserItem } from './UserItem';

export const UserList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const users = useSelector((state: RootState) => state.userReducer.users);

  useEffect(() => {
    dispatch(userActions.getUsers());
  }, []);

  return (
    <Row gutter={[16, 16]}>
      {users.map((user) => (
        <Col span={6} key={user.id}>
          <UserItem user={user} />
        </Col>
      ))}
    </Row>
  );
};
