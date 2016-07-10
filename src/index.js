import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import ApiKey from '../secrets';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [], 
			selectedVideo: null
		};

		this.videoSearch('pusherman')
	}

	videoSearch(term) {
		YTSearch({key: ApiKey.API_KEY, term: term }, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

  render() {
		return ( 
			<div>
		    <h1 className='title'> React - Redux  </h1>
	      <SearchBar onSearchTermChange= {term => this.videoSearch(term)}/> 
	      <VideoDetail video={this.state.selectedVideo}/>
	      <VideoList 
  				onVideoSelect={selectedVideo => this.setState({selectedVideo})}
	        videos={this.state.videos} /> 
		  </div>
		);  
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))