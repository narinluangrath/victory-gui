import React from 'react'
import { VictoryChart, VictoryLine } from 'victory'

import './Chart.css'

function Chart( props ) {
	const { theme, data } = props
	return (
		<div className='chart'>
			<VictoryChart theme={theme} >
					<VictoryLine data={data} />
			</VictoryChart>
		</div>
	)
}

export default Chart