import React, { useReducer, useRef } from 'react';

const ShoppingList = () => {
 const inputRef = useRef();	
 
 const [items, dispatch] = useReducer((state, action) => {
    switch(action.type){
      case 'add':
        return [...state, { name: action.name, id: state.length }]
      case 'remove':
        return state.filter((_, index) => index != action.index )
      case 'clear':
        return [];   
    }
 },[]);
 
 const handleSubmit = (e) => {
 	e.preventDefault();
 	dispatch({
      type: 'add',
      name: inputRef.current.value
 	});
 	inputRef.current.value = '';
 }

 return(
   <React.Fragment>
     <button type={() => dispatch({ type: 'clear'})}>Clear</button>
     <form onSubmit={handleSubmit}>
       <input ref={inputRef} />
     </form>
   	 <ul>
   	  {items.map((item, index) => (
        <li key={item.id}>{item.name} <button onClick={() => dispatch({ type: 'remove', index })}>X</button></li>
   	  ))}
     </ul>
   </React.Fragment>
 )
}

export default ShoppingList;
 