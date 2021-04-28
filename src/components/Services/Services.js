import React, { useReducer, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Table, Space, Drawer, Form, Button, Col, Row, Input,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { success, error } from '@Commons/MessagesApp/Messages';
import axios from '../../commons/axios';
import {
  TitlePage, WrapperTitle, WrapperTable, WrapperServices, ButtonAdd, ButtonDelete, ButtonUpdate,
} from './Services.styled';
import { ACTIONS, reducer, inistialStateReducer } from './helpers/helpersServices';
import { getSaloonId } from '../../store';

const Services = () => {
  const [theService, setService] = useState({
    ser_id: '',
    ser_price: '',
    ser_description: '',
    ser_time: '',
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [getDrawer, setShowDrawer] = useState(false);
  const [services, dispatch] = useReducer(reducer, inistialStateReducer);
  const saloonId = useSelector(getSaloonId);

  useEffect(async () => {
    if (saloonId) {
      try {
        const getServices = await axios.get(`services`);
        dispatch({ type: ACTIONS.GET_SERVICES, payload: getServices.data.services });
      } catch (errors) {
        error('Error al cargar los servicios');
      }
    }
  }, [saloonId]);

  const deleteService = async (id) => {
    try {
      await axios.delete(`services/${id}`);
      dispatch({ type: ACTIONS.DELETE_SERVICES, payload: id });
      success('Servicio eliminada correctamente');
    } catch (errors) {
      error('Error al eliminar un servicio');
    }
  };

  const buildService = (field, { target: { value } }) => {
    setService({ ...theService, [field]: value, sal_id: saloonId });
  };

  const createService = async () => {
    try {
      const newService = await axios.post('services', theService);
      dispatch({ type: ACTIONS.POST_SERVICES, payload: newService.data.services });
      success('Servicio creado correctamente');
      setShowDrawer(false);
    } catch (errors) {
      setShowDrawer(false);
      error('Error al crear servicio');
    }
  };

  const updateService = async () => {
    try {
      const updatedService = await axios.put(`services/${theService.ser_id}`, theService);
      dispatch({ type: ACTIONS.UPDATE_SERVICES, payload: { id: theService.ser_id, updatedService: updatedService.data.services } });
      setShowDrawer(false);
      setService({
        ser_price: '',
        ser_description: '',
        ser_time: '',
        sal_id: saloonId,
      });
      success('Servicio Modificado correctamente');
    } catch (errors) {
      error('Error al Modificar servicio');
    }
  };

  const showDrawerUpdate = (id) => {
    const serviceToUpdate = services.filter((service) => service.ser_id === id)[0];
    setService({ ...serviceToUpdate });
    setShowDrawer(true);
    setIsUpdating(true);
  };

  const showDrawer = () => {
    setIsUpdating(false);
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
          <ButtonUpdate onClick={() => showDrawerUpdate(record.ser_id)}>
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
    </WrapperServices>
  );
};

export default Services;
