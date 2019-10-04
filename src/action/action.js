
import { ADD_TODO } from './constant'
import { ADD_TITLE_CARD } from './constant'


export default function AddTodo(payload){  
   return { type: ADD_TODO, 
          payload };
}

export function AddTodoCardTitle(payload){  
   return { type: ADD_TITLE_CARD, 
          payload };
}

