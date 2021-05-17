import moment from 'moment';

export const formatToDate = (date, format) => moment(date).format(format);
export const now = () => moment.now();
