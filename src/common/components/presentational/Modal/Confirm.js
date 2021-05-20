import React, { useContext } from 'react';
import { I18nContext } from '@Application/lang/language';
import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const Confirm = ({ text, confirmDelete, children }) => {
  const { confirm } = Modal;
  const { messages, language } = useContext(I18nContext);

  function showDeleteConfirm() {
    confirm({
      title: text,
      icon: <ExclamationCircleOutlined />,
      content: '',
      okText: messages[language].Stock.Yes,
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
