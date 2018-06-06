import React from 'react'
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory'

import './Chart.css'

function Chart( props ) {
	// const { theme, data, chart } = props
	// const xAxis = chart.xAxis 
	// const yAxis = { 
	// 	...chart.yAxis,
	// 	dependentAxis : true
	// }
	// const line = chart.line
	const data = Array
								.from( { length : 50 }, (_, i) => i )
								.map( i => ({ x : i, y : Math.random() }) )

	return (
		<div className='chart'>
			<div className='victory'>
				<VictoryChart>
					<VictoryLine data={data} />
				</VictoryChart>
			</div>

{ /*
			<VictoryChart theme={theme} >
				<VictoryAxis {...xAxis} />
				<VictoryAxis {...yAxis} />
				<VictoryLine data={data} {...line} />
			</VictoryChart>
*/ }
		</div>
	)
}

export default Chart
