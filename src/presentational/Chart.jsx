import React from 'react'
import { VictoryChart, VictoryAxis, VictoryArea, VictoryZoomContainer } from 'victory'

import Toggles from './Toggles.jsx'
import './Chart.css'

function Chart( props ) {
	const { theme, data, chart, enableZoom, toggleZoom } = props
	// const xAxis = chart.xAxis 
	// const yAxis = { 
	// 	...chart.yAxis,
	// 	dependentAxis : true
	// }
	// const line = chart.line

	return (
		<div className='chart'>
			<Toggles toggleZoom={toggleZoom} enableZoom={enableZoom}/>
			<div className='victory'>
				<VictoryChart theme={theme} containerComponent={enableZoom ? <VictoryZoomContainer/> : undefined}>
					<VictoryArea data={data} />
				</VictoryChart>
			</div>
		</div>
	)
}

export default Chart
