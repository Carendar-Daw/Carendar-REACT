export const ACTIONS = {
  GET_PRODUCTS: 'get',
  POST_PRODUCTS: 'post',
  DELETE_PRODUCTS: 'delete',
  UPDATE_PRODUCTS: 'update',
};

export const reducer = (currentsProducts, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return [...action.payload];
    case ACTIONS.DELETE_PRODUCTS:
      return [...currentsProducts].filter((product) => product.sto_id !== action.payload);
    case ACTIONS.POST_PRODUCTS:
      return [...currentsProducts, action.payload];
    case ACTIONS.UPDATE_PRODUCTS:
      return [...currentsProducts].map((product) => (product.sto_id === action.payload.id ? action.payload.updatedService : product));
    default:
      return [...currentsProducts];
  }
};

export const inistialStateReducer = [];
