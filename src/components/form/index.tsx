import { Button, Form as AntdForm, FormInstance, Input } from 'antd';
import { Post } from '../../types/post';
const { TextArea } = Input;

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
        <TextArea
          defaultValue={post?.title}
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </AntdForm.Item>

      <AntdForm.Item label='Body' name='body'>
        <TextArea
          defaultValue={post?.body}
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </AntdForm.Item>
      <AntdForm.Item>
        <Button type='primary' htmlType='submit' style={{ width: '100%' }}>
          Submit
        </Button>
      </AntdForm.Item>
    </AntdForm>
  );
};
