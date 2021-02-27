import { compose, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import data from './reducer';


const composeEnhancers =  compose;


const store = createStore(
    data,
    composeEnhancers(applyMiddleware(thunk))
);


export default store;