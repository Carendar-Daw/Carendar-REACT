import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './user/reducer';

const logger = () => (next) => (action) => {
    const results = next(action);
    return results;
};

export default createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(logger, thunk)
    )
);
