import React, { Component } from 'react'
import { VictoryChart, VictoryLine } from 'victory'

const data = [
	{ x : 0, y : 0 },
	{ x : 1, y : 1 },
	{ x : 2, y : 2 },
	{ x : 3, y : 3 },
	{ x : 4, y : 4 },	
]

class Chart extends Component {

	constructor( props ) {
		super( props )
		this.state = {}
	}

	render() {
		return (
			<VictoryChart>
				<VictoryLine data={data} />
			</VictoryChart>
		)
	}
}

export default Chart