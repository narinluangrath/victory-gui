import React, { Component } from 'react'

// import Chart from './Chart.jsx'
import Header from '../presentational/Header.jsx'
import './App.css'

class App extends Component {

	constructor( props ) {
		super( props )
		this.state = {}
	}

	render() {
		return (
			<Header />
		)
	}
}

export default App