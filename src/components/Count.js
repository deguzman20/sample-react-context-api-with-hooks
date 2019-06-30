import React, { useReducer, useEffect } from 'react';


const Count = () => {

 const [count, dispatch] = useReducer((state, action) => {
   switch(action){
     case 'add':
       return state + 1;
     case 'minus':
       return state - 1;   
     return state;	
   }
 },0);
 
 return(
   <React.Fragment>
   	 <button type="button" onClick={() => dispatch('minus')}>-</button>
   	 {count}
   	 <button type="button" onClick={() => dispatch('add')}>+</button>
   </React.Fragment> 
 );
}

export default Count;