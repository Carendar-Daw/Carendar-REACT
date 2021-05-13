import React from 'react';
import {
  Button, Col, Drawer, Form, Input, Row,
} from 'antd';
import { WrapperButtonsDrawer } from '@Commons/components/domain/Styles/Style.styled';

const DrawerServices = ({
  onClose, getDrawer, createService, updateService, buildService, isUpdating, theService,
}) => {
  const onFinish = () => {
     isUpdating ? updateService() : createService();
  };

  return (
    <Drawer
      title={isUpdating ? 'Update a service' : 'Create a new service'}
      width={320}
      onClose={onClose}
      visible={getDrawer}
      destroyOnClose
      bodyStyle={{ paddingBottom: 80 }}
      initialValues={{
        name: theService.ser_description,
        price: theService.ser_price,
        time:theService.ser_time,
      }}
    >
      <Form layout="vertical" hideRequiredMark onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={22}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please enter user name' }]}
            >
              <Input placeholder="Please enter user name" onChange={(event) => buildService('ser_description', event)} />
            </Form.Item>
            <Form.Item
              name="price"
              label="Price"
              rules={[{ required: true, message: 'Please enter a price' }]}
            >
              <Input placeholder="Please enter a price" onChange={(event) => buildService('ser_price', event)} />
            </Form.Item>
            <Form.Item
              name="time"
              label="Time"
              rules={[{ required: true, message: 'Please enter a time' }]}
            >
              <Input placeholder="Please enter a time" onChange={(event) => buildService('ser_time', event)} />
            </Form.Item>
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
};

export default DrawerServices;
