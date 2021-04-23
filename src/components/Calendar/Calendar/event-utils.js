import axios from '../../../axios';

let eventGuid = 0;
// const todayStr = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
const INITIAL_EVENTS = [];
export function createEventId() {
  return String(eventGuid++);
}
export const getEvents = () => {
  let response = {};
  axios.get('/appointment/saloon/1').then((res) => {
    response = res.data;
  })
    .then(() => {
      response.data.appointments.forEach((app) => {
        const event = {
          id: app.app_id,
          title: app.cus_id,
          start: app.app_date,
          end: '2021-04-22 21:00:00',
        };
        console.log(event);
        INITIAL_EVENTS.push(event);
      });
    })
    .catch(console.log('xd'));

  return INITIAL_EVENTS;
};
