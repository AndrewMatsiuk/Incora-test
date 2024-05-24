import { UserList } from '../../components/user/UserList';
import { Layout } from 'antd';

const { Content, Header } = Layout;

export const UsersPage: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: '#221f1f',
      }}
    >
      <Layout>
        <Header
          style={{
            height: '8vh',
          }}
        >
          <div
            style={{
              color: 'white',
              fontSize: 32,
              display: 'flex',
            }}
          >
            Users
          </div>
        </Header>
        <Content
          style={{
            padding: '48px',
            height: '100vh',
            backgroundColor: '#A9C0E1',
          }}
        >
          <UserList />
        </Content>
      </Layout>
    </div>
  );
};
