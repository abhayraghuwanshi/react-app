import { createStore } from 'redux';
import {Cardreducer} from '../reducer/reducer.js'
import {combineReducers} from 'redux'
import { CardTitlereducer } from  '../reducer/reducer.js'

const allReducer=combineReducers({Cardreducer,CardTitlereducer})

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;