import React, { useContext } from 'react';
import { I18nContext } from '@Application/lang/language';
import {
  Button, Col, Drawer, Form, Input, Row,
} from 'antd';
import { WrapperButtonsDrawer } from '@Commons/components/domain/Styles/Style.styled';

const DrawerServices = ({
  onClose, getDrawer, createService, updateService, buildService, isUpdating, theService,
}) => {
  const { messages, language } = useContext(I18nContext);

  const onFinish = () => {
    isUpdating ? updateService() : createService();
  };

  return (
    <Drawer
      title={isUpdating ? messages[language].Services.EditService : messages[language].Services.CreateService}
      width={320}
      onClose={onClose}
      visible={getDrawer}
      destroyOnClose
      bodyStyle={{ paddingBottom: 80 }}
      initialValues={{
        name: theService.ser_description,
        price: theService.ser_price,
        time: theService.ser_time,
      }}
    >
      <Form layout="vertical" hideRequiredMark onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={22}>
            <Form.Item
              name="name"
              label={messages[language].Stock.Name}
              rules={[{ required: true, message: messages[language].Stock.PleaseEnterName }]}
            >
              <Input placeholder={messages[language].Stock.PleaseEnterName} defaultValue={theService.ser_description} onChange={(event) => buildService('ser_description', event)} />
            </Form.Item>
            <Form.Item
              name="price"
              label={messages[language].Services.Price}
              rules={[{ required: true, message: messages[language].Services.PleaseEnterPrice }]}
            >
              <Input placeholder={messages[language].Services.PleaseEnterPrice} defaultValue={theService.ser_price} onChange={(event) => buildService('ser_price', event)} />
            </Form.Item>
            <Form.Item
              name="time"
              label={messages[language].Services.Time}
              rules={[{ required: true, message: messages[language].Services.PleaseEnterTime }]}
            >
              <Input placeholder={messages[language].Services.PleaseEnterTime} defaultValue={theService.ser_time} onChange={(event) => buildService('ser_time', event)} />
            </Form.Item>
          </Col>
        </Row>
        <WrapperButtonsDrawer>
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            { messages[language].Stock.Cancel}
          </Button>
          {!isUpdating
            ? (
              <Button type="primary" htmlType="submit">
                { messages[language].Stock.Submit}
              </Button>
            ) : (
              <Button type="primary" htmlType="submit">
                { messages[language].Stock.Update}
              </Button>
            )}
        </WrapperButtonsDrawer>
      </Form>
    </Drawer>
  );
};

export default DrawerServices;
