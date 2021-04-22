import React, { useReducer, useState, useEffect } from 'react';
import {
  Table, Space, Drawer, Form, Button, Col, Row, Input,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from '../../axios';
import {
  TitlePage, WrapperTitle, WrapperTable, WrapperServices, ButtonAdd, ButtonDelete, ButtonUpdate,
} from './Services.styled';
import { ACTIONS, reducer, inistialStateReducer } from './helpers/helpersServices';

const Services = () => {
  const [getDrawer, setShowDrawer] = useState(false);
  const [services, dispatch] = useReducer(reducer, inistialStateReducer);

  useEffect(async () => {
    const servicesDb = await axios.get('services');
    dispatch({ type: ACTIONS.GET, payload: servicesDb.data.services });
  }, []);

  const deleteService = (id) => {
    console.log(id);
  };

  const showDrawer = () => {
    setShowDrawer(true);
  };
  const onClose = () => {
    setShowDrawer(false);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'ser_description',
      key: 'ser_description',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Precio',
      dataIndex: 'ser_price',
      key: 'ser_price',
    },
    {
      title: 'Time',
      dataIndex: 'ser_time',
      key: 'ser_time',
      responsive: ['sm'],
    },
    {
      title: 'Id',
      dataIndex: 'ser_id',
      key: 'ser_id',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <ButtonUpdate>
            Editar
          </ButtonUpdate>
          <ButtonDelete onClick={() => deleteService(record.ser_id)}>
            <FontAwesomeIcon className="icon" icon="trash" />
          </ButtonDelete>
        </Space>
      ),
    },
  ];

  const columnsTableFiltered = columns.filter((col) => col.dataIndex !== 'ser_id');

  return (
    <WrapperServices>
      <WrapperTitle>
        <FontAwesomeIcon className="icon" icon="calendar-alt" />
        <TitlePage>Servicios</TitlePage>
      </WrapperTitle>
      <WrapperTable>
        <Table columns={columnsTableFiltered} dataSource={services} />
      </WrapperTable>
      <ButtonAdd onClick={showDrawer}>
        <PlusOutlined className="buttonAdd" />
      </ButtonAdd>
      <Drawer
        title="Create a new account"
        width={720}
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
            <Button type="primary">
              Submit
            </Button>
          </div>
        )}
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter user name' }]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>

          </Row>

        </Form>
      </Drawer>
    </WrapperServices>
  );
};

export default Services;
