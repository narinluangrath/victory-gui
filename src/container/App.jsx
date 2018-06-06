import React, { Component, Fragment } from 'react'

import Header from '../presentational/Header.jsx'
import Body from './Body.jsx'
import CodeView from '../presentational/CodeView.jsx'
import './App.css'

class App extends Component {

	constructor( props ) {
		super( props )
	}

	render() {
		return (
			<div className='appContainer'>
				<Header />
				<Body />
			</div>
		)
	}
}

export default App