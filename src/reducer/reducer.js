
import { ADD_TODO, ADD_TITLE_CARD } from '../action/constant.js';

 const initialState1 = {
   inputTodo: []
 };
 const initialState2 = {
  cardTitle:[]
};
 
 export function Cardreducer(state = initialState1, action) {
    if( action.type === ADD_TODO) {
       return Object.assign({}, state, {
         inputTodo: state.inputTodo.concat(action.payload)
       });
     }
    return state;
 };

  
 export function CardTitlereducer(state = initialState2, action) {
    if ( action.type === ADD_TITLE_CARD) {
    return Object.assign({}, state, {
      cardTitle: state.cardTitle.concat(action.payload)
    });
  }
   return state;
};



