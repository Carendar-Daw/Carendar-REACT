import React from 'react';
import {
  Button, Col, Drawer, Form, Input, Row,
} from 'antd';

const DrawerServices = ({
  onClose, getDrawer, createService, updateService, buildService, isUpdating, theService
}) => (
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
            <Button type="primary" onClick={createService}>
              Submit
            </Button>
          ) : (
            <Button type="primary" onClick={updateService}>
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
            <Input placeholder="Please enter user name" defaultValue={theService.ser_description} onChange={(event) => buildService('ser_description', event)} />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: 'Please enter a price' }]}
          >
            <Input placeholder="Please enter a price" defaultValue={theService.ser_price} onChange={(event) => buildService('ser_price', event)} />
          </Form.Item>
          <Form.Item
            name="time"
            label="Time"
            rules={[{ required: true, message: 'Please enter a time' }]}
          >
            <Input placeholder="Please enter a time" defaultValue={theService.ser_time} onChange={(event) => buildService('ser_time', event)} />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  </Drawer>
);

export default DrawerServices;
