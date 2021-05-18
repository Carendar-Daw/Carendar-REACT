import React, { useContext } from 'react';
import {
  Button, Col, Drawer, Form, Input, Row,
} from 'antd';
import { WrapperButtonsDrawer } from '@Commons/components/domain/Styles/Style.styled';
import { I18nContext } from '@Application/lang/language';

const DrawerServices = ({
  onClose, getDrawer, createProduct, updateProduct, buildProduct, isUpdating, theProduct,
}) => {
  const { messages, language } = useContext(I18nContext);

  const onFinish = () => {
    if (!isUpdating) {
      createProduct();
    } else {
      updateProduct();
    }
  };

  return (
    <Drawer
      title={isUpdating ? messages[language].Stock.EditProduct : messages[language].Stock.CreateProduct}
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
              label={messages[language].Stock.Name}
              rules={[{ required: true, message: messages[language].Stock.PleaseEnterName }]}
            >
              <Input placeholder={messages[language].Stock.EditProduct} Value={theProduct.sto_name} onChange={(event) => buildProduct('sto_name', event)} />
            </Form.Item>
            <Form.Item
              name="amount"
              label={messages[language].Stock.Amount}
              rules={[{ required: true, message: messages[language].Stock.PleaseEnterAmount }]}
            >
              <Input placeholder={messages[language].Stock.PleaseEnterAmount} defaultValue={theProduct.sto_amount} onChange={(event) => buildProduct('sto_amount', event)} />
            </Form.Item>
            <Form.Item
              name="PVP"
              label={messages[language].Stock.PVP}
              rules={[{ required: true, message: messages[language].Stock.PleaseEnterPVP }]}
            >
              <Input placeholder={messages[language].Stock.PleaseEnterPVP} defaultValue={theProduct.sto_pvp} onChange={(event) => buildProduct('sto_pvp', event)} />
            </Form.Item>
            <Form.Item
              name="barcode"
              label={messages[language].Stock.Barcode}
              rules={[{ required: true, message: messages[language].Stock.PleaseEnterBarcode }]}
            >
              <Input placeholder={messages[language].Stock.PleaseEnterBarcode} defaultValue={theProduct.sto_barcode} onChange={(event) => buildProduct('sto_barcode', event)} />
            </Form.Item>
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
