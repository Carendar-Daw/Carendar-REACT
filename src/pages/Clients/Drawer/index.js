import React from 'react';
import {
  Button, Col, Drawer, Form, Input, Row, Upload
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { success, error } from '@Commons/components/presentational/MessagesApp/Messages';
import { WrapperButtonsDrawer } from "@Commons/components/domain/Styles/Style.styled";

const URLIMG = 'http://localhost/proyectoDAW/Carendar-LARAVEL/storage/app/public/images/avatar/';

const DrawerServices = ({ onClose, getDrawer, createClients, updateClients, buildClients, isUpdating, theClients, setClients }) => {

  const file = (info) => {
    if (info.file.status !== 'uploading') {
      setClients({ ...theClients, 'cus_photo':info.file.thumbUrl});
    }
    if (info.file.status === 'done') {
      success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      error(`${info.file.name} file upload failed.`);
    }
  }


  const fileList = [
    {
      uid: '-1',
      name: theClients.cus_photo,
      status: 'done',
      url: `${URLIMG}${theClients.cus_photo}`,

    },
  ];

  const onFinish = () => {
    if(!isUpdating){
      createClients()
    }else{
      updateClients();
    };
  };

  return (
      <Drawer
          title={isUpdating ? "Update a client" : "Create a new client"}
          width={320}
          onClose={onClose}
          visible={getDrawer}
          destroyOnClose
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Row gutter={16}>
            <Col span={22}>
              <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please enter user name' }]}
              >
                <Input placeholder="Please enter user name" defaultValue={theClients.cus_name} onChange={(event) => buildClients('cus_name', event)} />
              </Form.Item>
              <Form.Item
                  name="Email"
                  label="Email"
                  rules={[{ required: true, message: 'Please enter a email' }]}
              >
                <Input placeholder="Please enter a email" defaultValue={theClients.cus_email} onChange={(event) => buildClients('cus_email', event)} />
              </Form.Item>
              <Form.Item
                  name="Born"
                  label="Born"
                  rules={[{ required: true, message: 'Please enter a born date' }]}
              >
                <Input placeholder="Please enter a born date" defaultValue={theClients.cus_born_date} onChange={(event) => buildClients('cus_born_date', event)} />
              </Form.Item>
              <Form.Item
                  name="Color Preference"
                  label="Color Preference"
                  rules={[{ required: true, message: 'Please enter Color Preference' }]}
              >
                <Input placeholder="Please enter a Color" defaultValue={theClients.cus_color_preference} onChange={(event) => buildClients('cus_color_preference', event)} />
              </Form.Item>
              <Form.Item
                  name="Phone"
                  label="Phone"
                  rules={[{ required: true, message: 'Please enter a Phone' }]}
              >
                <Input placeholder="Please enter a Phone" defaultValue={theClients.cus_phone} onChange={(event) => buildClients('cus_phone', event)} />
              </Form.Item>
              <p>Optional photo</p>
              <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture"
                  maxCount={1}
                  onChange={file}
                  defaultFileList={isUpdating ? [...fileList] : null}
              >
                <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
              </Upload>
            </Col>
          </Row>
          <WrapperButtonsDrawer>
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            {!isUpdating
                ? (
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                ) : (
                    <Button type="primary" htmlType="submit">
                      Update
                    </Button>
                )}
          </WrapperButtonsDrawer>
        </Form>
      </Drawer>
  );
}



export default DrawerServices;
