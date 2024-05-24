import { Button, Form as AntdForm, FormInstance, Input } from 'antd';
import { Post } from '../../types/post';

type Props = {
  form: FormInstance<Post>;
  onFinish: (value: Post) => void;
  post?: Post;
};

export const Form: React.FC<Props> = ({ form, onFinish, post }) => {
  return (
    <AntdForm
      form={form}
      layout='vertical'
      onFinish={onFinish}
      initialValues={post}
    >
      <AntdForm.Item label='Title' name='title'>
        <Input defaultValue={post?.title} />
      </AntdForm.Item>

      <AntdForm.Item label='Body' name='body'>
        <Input defaultValue={post?.body} />
      </AntdForm.Item>
      <AntdForm.Item>
        <Button type='primary' htmlType='submit' style={{ width: '100%' }}>
          Submit
        </Button>
      </AntdForm.Item>
    </AntdForm>
  );
};
