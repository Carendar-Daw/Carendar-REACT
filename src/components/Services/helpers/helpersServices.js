/* eslint-disable indent */
export const ACTIONS = {
    GET_SERVICES: 'get',
    POST_SERVICES: 'post',
    DELETE_SERVICES: 'delete',
    UPDATE_SERVICES: 'update',
};


export const reducer = (currentUsers, action) => {
    switch (action.type) {
        case ACTIONS.GET_SERVICES:
            return [...action.payload];
        case ACTIONS.DELETE_SERVICES:
            return [...currentUsers].filter((service) => service.ser_id !== action.payload);
        case ACTIONS.POST_SERVICES:
            return [...currentUsers, action.payload];
        case ACTIONS.UPDATE_SERVICES:
            return [...currentUsers].map((service) => (service.ser_id === action.payload.id ? action.payload.updatedService : service));
        default:
            return [...currentUsers];
    }
};

export const inistialStateReducer = [];
