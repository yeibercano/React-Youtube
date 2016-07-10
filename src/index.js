import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBv20z2sRAEnXu-7oD9zfg5q6FvmM2gPMw';

// set new component

const App = () => {
	return ( 
		<div>
	    <h1 className='title'> React - Redux  </h1>
      <SearchBar /> 
	  </div>
	);  
}

// render component to DOM
ReactDOM.render(<App />, document.querySelector('.container'))