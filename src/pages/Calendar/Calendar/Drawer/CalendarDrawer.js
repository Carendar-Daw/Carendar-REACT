import React, { useContext } from 'react';
import { I18nContext } from '@Application/lang/language';
import {
  Button, Col, DatePicker, Drawer, Form, Row, Select,
} from 'antd';
import moment from 'moment';
import { TwitterPicker } from 'react-color';
import axios from '@Commons/http';

const CalendarDrawer = ({
  edit, onClose, view, setEvent, event, info, customers, events, handleDateSelect, postAppointment, putAppointment, services,
}) => {
  const { messages, language } = useContext(I18nContext);

  const loadCustomers = () => {
    const options = [];
    if (customers) {
      customers.forEach((customer) => {
        options.push(<Select.Option value={customer.cus_id} key={customer.cus_id}>{customer.cus_name}</Select.Option>);
      });
    }
    return options;
  };
  const loadServices = () => {
    const options = [];
    services.forEach((service) => {
      options.push(<Select.Option value={service.ser_id} key={service.ser_id}>{service.ser_description}</Select.Option>);
    });
    return options;
  };
  const loadDefaultServices = () => event.services.map((service) => service);

  const postEvent = () => {
    postAppointment();
    handleDateSelect();
    onClose();
  };
  const editEvent = () => {
    onClose();
    putAppointment();
    const calendarApi = info.view.calendar;
    events.forEach((ev) => {
      if (ev.id === parseInt(info.event.id, 10)) {
        const updatedEvent = { ...ev };
        updatedEvent.state = event.state;
        updatedEvent.color = event.color;
        updatedEvent.title = `${updatedEvent.customer.cus_name} - ${event.state}`;
        calendarApi.getEventById(info.event.id).remove();
        calendarApi.addEvent(updatedEvent);
      }
    });
  };

  const deleteAppointment = async () => axios.delete(`/appointment/${info.event.id}`);

  const deleteEvent = () => {
    onClose();
    deleteAppointment();
    const calendarApi = info.view.calendar;
    events.forEach((ev) => {
      if (ev.id === parseInt(info.event.id, 10)) {
        calendarApi.getEventById(info.event.id).remove();
      }
    });
  };
  const onFinish = () => {
    if (!edit) {
      postEvent();
    } else {
      editEvent();
    }
  };
  return (
    <Drawer
      title={
            edit
              ? messages[language].Appointments.EditAppointment
              : messages[language].Appointments.CreateAppointment
          }
      width={window.innerWidth > 1000 ? 720 : window.innerWidth}
      onClose={onClose}
      visible={view}
      destroyOnClose
      bodyStyle={{ paddingBottom: 80 }}
    >
      <Form
        layout="vertical"
        hideRequiredMark
        onFinish={onFinish}
        initialValues={{
          'date-picker': event.app_date
            ? moment(event.app_date)
            : moment(info.startStr),
          customer: event.cus_id ? event.cus_id : null,
          services: event.services
            ? loadDefaultServices()
            : [],
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="customer"
              label={messages[language].Appointments.CustomerID}
              hasFeedback
              rules={[{ required: true, message: messages[language].Appointments.PleaseSelectCustomer }]}
            >
              <Select
                showSearch
                placeholder={messages[language].Appointments.PleaseSelectCustomer}
                optionFilterProp="children"
                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                onChange={(e) => setEvent({ ...event, cus_id: e })}
              >
                {loadCustomers()}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="date-picker"
              label={messages[language].Appointments.AppointmentDate}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: messages[language].Appointments.PleaseEnterAppointmentDate,
                },
              ]}
            >
              <DatePicker
                style={{ width: '100%' }}
                getPopupContainer={(trigger) => trigger.parentElement}
                showTime
                allowClear={false}
                format="DD-MM-YY HH:mm"
                onChange={(e) => setEvent({ ...event, app_date: e })}
              />

            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label={messages[language].Customers.State}
              rules={[{ required: true, message: messages[language].Appointments.PleaseEnterState }]}
            >
              <Select
                style={{ width: '100%' }}
                defaultValue={info.event ? info.event.extendedProps.state : 'Confirmado'}
                placeholder={messages[language].Appointments.PleaseSelect}
                onChange={(e, data) => setEvent({ ...event, state: data.value })}
              >
                <Select.Option value="Pendiente">{messages[language].Appointments.ToConfirm}</Select.Option>
                <Select.Option value="Aprobado">{messages[language].Appointments.Aproved}</Select.Option>
                <Select.Option value="Finalizado">{messages[language].Appointments.Finished}</Select.Option>
                <Select.Option value="Facturado">{messages[language].Appointments.Factured}</Select.Option>
                <Select.Option value="Cancelado">{messages[language].Appointments.Canceled}</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="services"
              label={messages[language].Services.Title}
              rules={[{ required: true, message: messages[language].Appointments.PleaseSelectService, type: 'array' }]}
            >
              <Select
                showSearch
                mode="multiple"
                allowClear
                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                style={{ width: '100%' }}
                placeholder={messages[language].Appointments.PleaseSelect}
                onChange={(value) => setEvent({ ...event, services: value })}
              >
                {loadServices()}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="color"
            >
              <TwitterPicker
                colors={['#6B5091', '#896EAF', '#947BB7', '#9F89BE', '#947BB8', '#9F89BF', '#A996C5',
                  '#DE5476', '#E26584', '#E57692', '#E8879F', '#EB98AD', '#EEAABB', '#F2BBC9']}
                color={event.color ? event.color : setEvent({ ...event, color: '#6B5091' })}
                triangle="hide"
                onChangeComplete={(e) => setEvent({ ...event, color: e.hex })}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={22}>
            <Row>
              <Col span={22}>
                <div
                  style={{
                    textAlign: 'right',
                  }}
                >
                  <Button onClick={onClose} style={{ marginRight: 8 }}>
                    { messages[language].Stock.Cancel}
                  </Button>
                  {
                    edit
                      ? (
                        <>
                          <Button type="primary" style={{ marginRight: 8 }} htmlType="submit">
                            { messages[language].Stock.Edit}
                          </Button>
                          <Button onClick={deleteEvent} type="danger">
                            { messages[language].Stock.Delete}
                          </Button>
                        </>
                      )
                      : (
                        <Button type="primary" htmlType="submit">
                          { messages[language].Stock.Submit}
                        </Button>
                      )
                  }
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};
export default CalendarDrawer;
