import { Layout } from 'antd';
import { CommentList } from '../../components/comment/CommentList';

const { Content, Header } = Layout;

export const PostDetailsPage: React.FC = () => {
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
        <CommentList />
      </Content>
    </Layout>
  );
};
