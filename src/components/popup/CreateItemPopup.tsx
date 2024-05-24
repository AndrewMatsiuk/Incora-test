import React from 'react';
import { Modal, Form as AntdFrom } from 'antd';
import { Form } from '../form';
import { Post } from '../../types/post';

type Props = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (value: Post) => void;
};

export const CreateItemPopup: React.FC<Props> = ({
  visible,
  onClose,
  onSubmit,
}) => {
  const [form] = AntdFrom.useForm();

  const onFinish = (value: Post) => {
    onSubmit(value);
    reset();
  };

  const reset = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      open={visible}
      title='Create Product'
      footer={null}
      onCancel={onClose}
    >
      <Form form={form} onFinish={onFinish} />
    </Modal>
  );
};
