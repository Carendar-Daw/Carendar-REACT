import React from 'react';
import {
  Button, Col, Drawer, Form, Input, Row, Upload
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const DrawerServices = ({ onClose, getDrawer, createClients, updateClients, buildClients, isUpdating, theClients, setClients }) => {

  const file = (info) => {
    if (info.file.status !== 'uploading') {
      setClients({ ...theClients, 'cus_photo':info.file.thumbUrl});
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
  return (
      <Drawer
          title="Create a new Service"
          width={320}
          onClose={onClose}
          visible={getDrawer}
          destroyOnClose
          bodyStyle={{ paddingBottom: 80 }}
          footer={(
              <div
                  style={{
                    textAlign: 'right',
                  }}
              >
                <Button onClick={onClose} style={{ marginRight: 8 }}>
                  Cancel
                </Button>
                {!isUpdating
                    ? (
                        <Button type="primary" onClick={createClients}>
                          Submit
                        </Button>
                    ) : (
                        <Button type="primary" onClick={updateClients}>
                          Update
                        </Button>
                    )}
              </div>
          )}
      >
        <Form layout="vertical" hideRequiredMark>
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
                  name="Optional Photo"
                  label="Optional Photo"
              >
                <Input placeholder="Optional Photo" defaultValue={theClients.cus_phone} onChange={(event) => buildClients('cus_phone', event)} />
              </Form.Item>
              <Form.Item
                  name="Color Preference"
                  label="Color Preference"
                  rules={[{ required: true, message: 'Please enter Color Preference' }]}
              >
                <Input placeholder="Please enter a Color" defaultValue={theClients.cus_color_preference} onChange={(event) => buildClients('cus_color_preference', event)} />
              </Form.Item>
              <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture"
                  maxCount={1}
                  onChange={file}
              >
                <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
              </Upload>
              <Form.Item
                  name="Phone"
                  label="Phone"
                  rules={[{ required: true, message: 'Please enter a Phone' }]}
              >
                <Input placeholder="Please enter a Phone" defaultValue={theClients.cus_phone} onChange={(event) => buildClients('cus_phone', event)} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
  );
}



export default DrawerServices;
