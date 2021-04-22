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
        default:
            return {
                ...currentUsers,
            };
    }
};

export const inistialStateReducer = [];
