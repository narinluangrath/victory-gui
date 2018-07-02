import React, { Component, Fragment } from 'react'
import ReactGA from 'react-ga'

import Header from './Header.jsx'
import Main from '../container/Main.jsx'
import './App.css'

ReactGA.initialize( 'UA-121733980' )
ReactGA.pageview( window.location.pathname )

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
