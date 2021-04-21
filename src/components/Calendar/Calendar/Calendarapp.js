import React ,{useState}from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction";
import { Drawer, Form, Button, Col, Row, Input } from 'antd';
import { Container } from "@Components/Calendar/Calendar/Calendarapp.styled";



const Calendarapp = () => {

    const [state, setState] = useState(false);
    const [title, setTitle] = useState('');
    const [info, setInfo]= useState('');


   const showDrawer = (selectInfo) => {
        setState(true);
        setInfo(selectInfo)
    };

   const onClose = () => {
       setState(false);
       setTitle('');
    };

   const buildCita = e =>{
       setTitle(e.target.value)
       handleDateSelect()
       onClose()
   }

 const handleDateSelect = () => {
     let calendarApi = info.view.calendar
     calendarApi.unselect() // clear date selection

     if (title) {
         calendarApi.addEvent({ // will render immediately. will call handleEventAdd
             title,
             start: info.startStr,
             end: info.endStr,
             allDay: info.allDay
         }, true) // temporary=true, will get overwritten when reducer gives new events
     }
 }

    return (
        <>
        <Container>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                initialView='dayGridMonth'
                editable={false}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                select={showDrawer}

            />
        </Container>
            <Drawer
                title="Create a new account"
                width={720}
                onClose={onClose}
                visible={state}
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
                        <Button onClick={buildCita} type="primary">
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
                                <Input placeholder="Please enter user name"  onChange={(e)=>setTitle(e.target.value)} />
                            </Form.Item>
                        </Col>

                    </Row>

                </Form>
            </Drawer>
        </>
            )


}


export default Calendarapp;