import React, { Component, Fragment } from 'react'

import Header from '../presentational/Header.jsx'
import Main from './Main.jsx'
import './App.css'

class App extends Component {

	constructor( props ) {
		super( props )
	}

	render() {
		return (
			<div className='appContainer'>
				<Header />
				<Main />
			</div>
		)
	}
}

export default App