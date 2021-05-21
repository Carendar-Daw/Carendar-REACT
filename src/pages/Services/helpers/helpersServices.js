/* eslint-disable indent */
export const ACTIONS = {
    GET_SERVICES: 'get',
    POST_SERVICES: 'post',
    DELETE_SERVICES: 'delete',
    UPDATE_SERVICES: 'update',
};

export const reducer = (currentServices, action) => {
    switch (action.type) {
        case ACTIONS.GET_SERVICES:
            return [...action.payload];
        case ACTIONS.DELETE_SERVICES:
            return [...currentServices].filter((service) => service.ser_id !== action.payload);
        case ACTIONS.POST_SERVICES:
            return [...currentServices, action.payload];
        case ACTIONS.UPDATE_SERVICES:
            return [...currentServices].map((service) => (service.ser_id === action.payload.id ? action.payload.updatedService : service));
        default:
            return [...currentServices];
    }
};

export const inistialStateReducer = [];
