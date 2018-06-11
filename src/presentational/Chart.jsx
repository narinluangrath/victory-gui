import React from 'react'
import { VictoryChart, VictoryTooltip, VictoryLine, VictoryAxis, VictoryArea, VictoryZoomContainer, createContainer, VictoryVoronoiContainer } from 'victory'

import Toggles from './Toggles.jsx'
import './Chart.css'

function Chart( props ) {
	const { theme, data, chart, enableZoom, toggleZoom, changeInterpolation, interpolation, backgroundColor, changeBackground, toggleTooltips, enableTooltips } = props
	const opts = [ enableZoom && 'zoom', enableTooltips && 'voronoi' ].filter( x => x != null && x != false )
	const VictoryZoomVoronoiContainer = createContainer( ...opts )

	console.log( opts )

	return (
		<div className='chart'>
			<Toggles 
				toggleZoom={toggleZoom}
				enableZoom={enableZoom}
				toggleTooltips={toggleTooltips}
				enableZoom={enableZoom}
				changeInterpolation={changeInterpolation}
				interpolation={interpolation}
				backgroundColor={backgroundColor}
				changeBackground={changeBackground}
			/>
			<div className='victory' style={{backgroundColor}}>
				<VictoryChart 
					theme={theme} 
					containerComponent={<VictoryZoomVoronoiContainer />}
				>
					<VictoryArea 
						data={data} 
						interpolation={interpolation}
				    labels={(d) => d.y}
						labelComponent={<VictoryTooltip/>}
					/>
				</VictoryChart>
			</div>
		</div>
	)
}

export default Chart
