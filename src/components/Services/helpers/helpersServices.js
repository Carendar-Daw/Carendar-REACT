export const ACTIONS = {
    GET: 'get',
    POST: 'post',
    DELETE: 'delete',
    UPDATE: 'update',

}

export const reducer = (currentUsers, action) => {
    switch (action.type) {

        case ACTIONS.GET:
            const servicesFormat = [];

            return [];

        default:
            return {
                ...currentUsers
            };
    }
}


export const inistialStateReducer = [];
