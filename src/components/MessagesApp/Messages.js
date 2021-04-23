import { message } from 'antd';

export const success = (messaageText) => {
    message.success(messaageText);
};

export const error = (messaageText) => {
    message.error(messaageText);
};

export const warning = (messaageText) => {
    message.warning(messaageText);
};
