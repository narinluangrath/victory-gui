import React, { Component } from 'react'
import Resizable from 're-resizable'

import Chart from './Chart.jsx'


class App extends Component {

	constructor( props ) {
		super( props )
		this.state = {}
	}

	render() {
		return (
			<Resizable
				style={{border: 'solid 1px #ddd'}}
			  defaultSize={{width: 400, height: 300}}
			>
			  <Chart/>
			</Resizable>
		)
	}
}

export default App