import React from 'react';
import {
  Button, Col, Drawer, Form, Input, Row,
} from 'antd';
import { WrapperButtonsDrawer } from '@Commons/components/domain/Styles/Style.styled';

const DrawerServices = ({
  onClose, getDrawer, createProduct, updateProduct, buildProduct, isUpdating, theProduct,
}) => {
  const onFinish = () => {
    if (!isUpdating) {
      createProduct();
    } else {
      updateProduct();
    }
  };

  return (
    <Drawer
      title={isUpdating ? 'Update a product' : 'Create a new product'}
      width={320}
      onClose={onClose}
      visible={getDrawer}
      destroyOnClose
      bodyStyle={{ paddingBottom: 80 }}
    >
      <Form layout="vertical"
            hideRequiredMark
            onFinish={onFinish}
            initialValues={{
              name: theProduct.sto_name,
              amount: theProduct.sto_amount,
              PVP:theProduct.sto_pvp,
              barcode: theProduct.sto_barcode,
            }}
      >
        <Row gutter={16}>
          <Col span={22}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please enter name' }]}
            >
              <Input placeholder="Please enter name" onChange={(event) => buildProduct('sto_name', event)} />
            </Form.Item>
            <Form.Item
              name="amount"
              label="Amount"
              rules={[{ required: true, message: 'Please enter a amount' }]}
            >
              <Input placeholder="Please enter a amount" onChange={(event) => buildProduct('sto_amount', event)} />
            </Form.Item>
            <Form.Item
              name="PVP"
              label="PVP"
              rules={[{ required: true, message: 'Please enter a PVP' }]}
            >
              <Input placeholder="Please enter a PVP" onChange={(event) => buildProduct('sto_pvp', event)} />
            </Form.Item>
            <Form.Item
              name="barcode"
              label="Barcode"
              rules={[{ required: true, message: 'Please enter a barcode' }]}
            >
              <Input placeholder="Please enter a barcode" onChange={(event) => buildProduct('sto_barcode', event)} />
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
