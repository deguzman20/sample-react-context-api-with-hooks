import React, { useState, Fragment } from 'react';
import Count from './Count';
import Form from './Form';
import ShoppingList from './ShoppingList';

const NewSongForm = ({ addSong }) => {
	const [title, setTitle] =  useState('');
	const handleSubmit = (e) => {
      e.preventDefault();
      addSong(title);
	}

	return(
    <Fragment>  
      <form onSubmit={handleSubmit}>
        <label>song name:</label>
        <input type="text" 
               value={title} 
               required onChange={(e) => setTitle(e.target.value) }/>
        <input type="submit" 
               value="add song" />
      </form>
      <Count />
      <ShoppingList />
      <Form />
    </Fragment>  
	);
}

export default NewSongForm;