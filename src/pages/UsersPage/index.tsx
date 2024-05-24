import { UserList } from '../../components/user/UserList';
import { Layout, Button } from 'antd';

const { Content, Header } = Layout;

export const UsersPage: React.FC = () => {
  return (
    <Layout>
      <Header
        style={{
          height: '10vh',
          backgroundColor: '#221f1f',
          alignContent: 'center',
        }}
      ></Header>
      <Content
        style={{ padding: '48px', height: '100%', backgroundColor: 'white' }}
      >
        <UserList />
      </Content>
    </Layout>
  );
};
