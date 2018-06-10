import React from 'react'
import { VictoryChart, VictoryAxis, VictoryArea, VictoryZoomContainer } from 'victory'

import Toggles from './Toggles.jsx'
import './Chart.css'

function Chart( props ) {
	const { theme, data, chart, enableZoom, toggleZoom, changeInterpolation, interpolation, backgroundColor, changeBackground } = props

	return (
		<div className='chart'>
			<Toggles 
				toggleZoom={toggleZoom}
				enableZoom={enableZoom}
				changeInterpolation={changeInterpolation}
				interpolation={interpolation}
				backgroundColor={backgroundColor}
				changeBackground={changeBackground}
			/>
			<div className='victory'>
				<VictoryChart 
					theme={theme} 
					containerComponent={enableZoom ? <VictoryZoomContainer/> : undefined}
				>
					<VictoryArea 
						data={data} 
						interpolation={interpolation}
					/>
				</VictoryChart>
			</div>
		</div>
	)
}

export default Chart
