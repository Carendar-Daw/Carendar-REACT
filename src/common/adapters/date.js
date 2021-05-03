import moment from 'moment';

export const formatToDate = (date, format) => moment(date).format(format);