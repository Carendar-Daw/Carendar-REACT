import { ACTIONS } from './actions';

const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SAVE_SALOON:
            return { ...action.payload };
        case ACTIONS.SAVE_PHOTO_SALOON:
            return { ...state, 'picture': action.payload };
        default:
            return state;
    }
};

export default reducer;

export const getSaloonId = (store) => store.sal_id;

export const getSaloonPicture = (store) => store.picture;