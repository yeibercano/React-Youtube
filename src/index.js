import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBv20z2sRAEnXu-7oD9zfg5q6FvmM2gPMw';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'pusherman'}, (videos) => {
			this.setState({ videos })
		})
	}

  render() {
		return ( 
			<div>
		    <h1 className='title'> React - Redux  </h1>
	      <SearchBar /> 
		  </div>
		);  
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))