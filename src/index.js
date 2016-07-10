import React from 'react'
import ReactDOM from 'react-dom'

// set new component

const App = () => {
	return <div className='title'> React - Redux - Webpack - Node - PostCSS </div>;
}

// render component to DOM
ReactDOM.render(<App />, document.querySelector('.container'))