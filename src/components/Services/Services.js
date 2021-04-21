import React, { useReducer, useState, useEffect } from 'react';
import { Table, Space, Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import axios from '../../axios'
import { PlusOutlined } from '@ant-design/icons';
import { TitlePage, WrapperTitle, WrapperTable, WrapperServices, ButtonAdd } from './Services.styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ACTIONS, reducer, inistialStateReducer } from './helpers/helpersServices';

const columns = [
    {
        title: 'Name',
        dataIndex: 'ser_description',
        key: 'ser_description',
        render: text => <a>{text}</a>,
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
        responsive: ["sm"]
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];



const data = [
    {
        key: '1',
        ser_description: 'John Brown',
        ser_price: 32,
        ser_time: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        ser_description: 'John Brown',
        ser_price: 32,
        ser_time: 'New York No. 1 Lake Park',
    },
    {
        key: '3',
        ser_description: 'John Brown',
        ser_price: 32,
        ser_time: 'New York No. 1 Lake Park',
    },

];

const Services = () => {
    const [getDrawer, setShowDrawer] = useState(false);
    const [services, dispatch] = useReducer(reducer, inistialStateReducer);

    useEffect(async () => {
        //const services = await axios.get('services');
        console.log(axios.defaults.headers.common['Authorization']);
        // dispatch({ type: ACTIONS.GET, payload: services.data.data.services });
    }, []);

    const showDrawer = () => {
        setShowDrawer(true);
    }
    const onClose = () => {
        setShowDrawer(false);
    }


    return (
        <WrapperServices>
            <WrapperTitle>
                <FontAwesomeIcon className={'icon'} icon={'calendar-alt'} />
                <TitlePage>Servicios</TitlePage>
            </WrapperTitle>
            <WrapperTable>
                <Table columns={columns} dataSource={data} />
            </WrapperTable>
            <ButtonAdd onClick={showDrawer}>
                <PlusOutlined className={"buttonAdd"} />
            </ButtonAdd>
            <Drawer
                title="Create a new account"
                width={720}
                onClose={onClose}
                visible={getDrawer}
                destroyOnClose={true}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
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
                }
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
    )
}

export default Services;
