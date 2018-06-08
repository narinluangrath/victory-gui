import React from 'react'
import { VictoryChart, VictoryLine, VictoryAxis, VictoryArea } from 'victory'

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
					<VictoryArea data={data} />
				</VictoryChart>
			</div>
		</div>
	)
}

export default Chart
