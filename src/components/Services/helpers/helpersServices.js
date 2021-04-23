/* eslint-disable indent */
export const ACTIONS = {
    GET: 'get',
    POST: 'post',
    DELETE: 'delete',
    UPDATE: 'update',

};

export const reducer = (currentUsers, action) => {
    switch (action.type) {
        case ACTIONS.GET:
            return [...action.payload];
        case ACTIONS.DELETE:
            return [...currentUsers].filter((service) => service.ser_id !== action.payload);
        case ACTIONS.POST:
            // eslint-disable-next-line no-case-declarations
            const Array = [...currentUsers].push(action.payload);
            return Array;
        default:
            return [...currentUsers];
    }
};

export const inistialStateReducer = [];
