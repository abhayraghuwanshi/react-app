import { createStore } from 'redux';
import reducer from '../reducer/reducer.js'

const enhancer= window.devToolsExtension && window.devToolsExtension()
const store = createStore(reducer, {enhancer});

store.getState()


export default store;