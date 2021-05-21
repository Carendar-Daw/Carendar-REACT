import React, { useContext } from 'react';
import { I18nContext } from '@Application/lang/language';
import {
  Button, Col, Drawer, Form, Input, Row, Upload, DatePicker,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { success, error } from '@Commons/components/presentational/MessagesApp/Messages';
import { WrapperButtonsDrawer } from '@Commons/components/domain/Styles/Style.styled';
import moment from 'moment';

const URLIMG = 'http://localhost/proyectoDAW/Carendar-LARAVEL/storage/app/public/images/avatar/';

const DrawerServices = ({
  onClose, getDrawer, createClients, updateClients, buildClients, isUpdating, theClients, setClients, insertDate,
}) => {
  const { messages, language } = useContext(I18nContext);
  const file = (info) => {
    if (info.file.status !== 'uploading') {
      setClients({ ...theClients, cus_photo: info.file.thumbUrl });
    }
    if (info.file.status === 'done') {
      success(`${info.file.name} ${messages[language].Customers.FileUpload}`);
    } else if (info.file.status === 'error') {
      error(`${info.file.name} ${messages[language].Customers.UploadFail}`);
    }
  };

  const fileList = [
    {
      uid: '-1',
      name: theClients.cus_photo,
      status: 'done',
      url: `${URLIMG}${theClients.cus_photo}`,

    },
  ];

  const onFinish = () => {
    if (!isUpdating) {
      createClients();
    } else {
      updateClients();
    }
  };

  return (
    <Drawer
      title={isUpdating ? messages[language].Customers.EditCustomer : messages[language].Customers.CreateCustomer}
      width={320}
      onClose={onClose}
      visible={getDrawer}
      destroyOnClose
    >
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          name: theClients.cus_name,
          Email: theClients.cus_email,
          ColorPreference: theClients.cus_color_preference,
          Phone: theClients.cus_phone,
          'date-picker': theClients.cus_born_date,
        }}
      >
        <Row gutter={16}>
          <Col span={22}>
            <Form.Item
              name="name"
              label={messages[language].Stock.Name}
              rules={[{ required: true, message: messages[language].Stock.PleaseEnterName }]}
            >
              <Input placeholder={messages[language].Stock.PleaseEnterName} defaultValue={theClients.cus_name} onChange={(event) => buildClients('cus_name', event)} />
            </Form.Item>
            <Form.Item
              name="Email"
              label="Email"
              rules={[{ required: true, message: messages[language].Customers.PleaseEnterEmail }]}
            >
              <Input placeholder={messages[language].Customers.PleaseEnterEmail} defaultValue={theClients.cus_email} onChange={(event) => buildClients('cus_email', event)} />
            </Form.Item>
            <Form.Item
              name="Born"
              label={messages[language].Customers.Born}
              rules={[{ required: true, message: messages[language].Customers.PleaseEnterBorn }]}
            >
              <DatePicker
                format="YYYY-MM-DD"
                onChange={(event) => insertDate(event.format('YYYY-MM-DD'))}
              />
            </Form.Item>
            <Form.Item
              name="ColorPreference"
              label={messages[language].Customers.ColorPreference}
              rules={[{ required: true, message: messages[language].Customers.PleaseEnterColorPreference }]}
            >
              <Input placeholder="Please enter a Color" onChange={(event) => buildClients('cus_color_preference', event)} />
            </Form.Item>
            <Form.Item
              name="Phone"
              label={messages[language].Customers.Phone}
              rules={[{ required: true, message: messages[language].Customers.PleaseEnterPhone }]}
            >
              <Input placeholder={messages[language].Customers.PleaseEnterPhone} defaultValue={theClients.cus_phone} onChange={(event) => buildClients('cus_phone', event)} />
            </Form.Item>
            <p>{messages[language].Customers.OptionalPhoto}</p>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture"
              maxCount={1}
              onChange={file}
              defaultFileList={isUpdating ? [...fileList] : null}
            >
              <Button icon={<UploadOutlined />}>{messages[language].Customers.UploadPhoto}</Button>
            </Upload>
          </Col>
        </Row>
        <WrapperButtonsDrawer>
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            {messages[language].Stock.Cancel}
          </Button>
          {!isUpdating
            ? (
              <Button type="primary" htmlType="submit">
                {messages[language].Stock.Submit}
              </Button>
            ) : (
              <Button type="primary" htmlType="submit">
                {messages[language].Stock.Update}
              </Button>
            )}
        </WrapperButtonsDrawer>
      </Form>
    </Drawer>
  );
};

export default DrawerServices;
