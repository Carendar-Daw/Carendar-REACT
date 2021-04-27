/* eslint-disable indent */
export const ACTIONS = {
    GET_CLIENTS: 'get',
    POST_CLIENTS: 'post',
    DELETE_CLIENTS: 'delete',
    UPDATE_CLIENTS: 'update',
};


export const reducer = (currentClients, action) => {
    switch (action.type) {
        case ACTIONS.GET_CLIENTS:
            return [...action.payload];
        case ACTIONS.DELETE_CLIENTS:
            return [...currentClients].filter((clients) => clients.cus_id !== action.payload);
        case ACTIONS.POST_CLIENTS:
            return [...currentClients, action.payload];
        case ACTIONS.UPDATE_CLIENTS:
            return [...currentClients].map((clients) => (clients.cus_id === action.payload.id ? action.payload.updatedClients : clients));
        default:
            return [...currentClients];
    }
};

export const inistialStateReducer = [];
