import { ACTIONS } from './actions';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SAVE_SALOON:
      return { ...action.payload };
    default:
      return state;
  }
};

export default reducer;

export const getSaloonId = (store) => store.sal_id;
