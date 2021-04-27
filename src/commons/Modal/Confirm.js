import React from 'react';
import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const Confirm = ({ text, confirmDelete, children }) =>{

  const { confirm } = Modal;

  function showDeleteConfirm() {
    confirm({
      title: text,
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        confirmDelete();
      },
      onCancel() {
        console.log('Are you drunk?');
      },
    });
  }

  return (
    <div onClick={showDeleteConfirm} type="dashed">
      {children}
    </div>
  );
};

export default Confirm;
