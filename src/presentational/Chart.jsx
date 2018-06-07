import React from 'react'
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory'

import './Chart.css'

function Chart( props ) {
	const { theme, data, chart } = props
	// const xAxis = chart.xAxis 
	// const yAxis = { 
	// 	...chart.yAxis,
	// 	dependentAxis : true
	// }
	// const line = chart.line

	return (
		<div className='chart'>
			<div className='victory'>
				<VictoryChart theme={theme}>
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
