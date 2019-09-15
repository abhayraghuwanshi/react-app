import React from 'react'


export const ITEMS_REQUEST = 'ITEMS_REQUEST' ;

export function Todo(){
   return {
      type: ITEMS_REQUEST,
      payload:{
          name:"abhay"
      }
   }
}
