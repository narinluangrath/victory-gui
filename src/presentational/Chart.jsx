import React from 'react'
import { VictoryChart, VictoryScatter, VictoryTooltip, VictoryLine, VictoryAxis, VictoryArea, VictoryZoomContainer, createContainer, VictoryVoronoiContainer } from 'victory'
import get from 'lodash/get'

import ToggleBar from './ToggleBar.jsx'
import ThemeBar from './ThemeBar.jsx'
import './Chart.css'

function Chart( props ) {
	const { 
		width, 
		height,
		theme, 
		data, 
		chart, 
		enableZoom, 
		toggleZoom, 
		changeInterpolation, 
		interpolation, 
		backgroundColor, 
		changeBackground, 
		toggleTooltips, 
		enableTooltips,
		enablePoints,
		togglePoints,
		loadTheme } = props
	const opts = [ enableZoom && 'zoom', enableTooltips && 'voronoi' ].filter( x => x != null && x != false )
	const VictoryZoomVoronoiContainer = createContainer( ...opts )

	return (
		<div className='chart'>
			<ToggleBar
				toggleZoom={toggleZoom}
				enableZoom={enableZoom}
				toggleTooltips={toggleTooltips}
				enableTooltips={enableTooltips}
				togglePoints={togglePoints}
				enablePoints={enablePoints}
				changeInterpolation={changeInterpolation}
				interpolation={interpolation}
				backgroundColor={backgroundColor}
				changeBackground={changeBackground}
			/>
			<ThemeBar loadTheme={loadTheme}/>
			<div className='victory' style={{backgroundColor, width, height}}>
				<VictoryChart 
					theme={theme} 
					containerComponent={<VictoryZoomVoronoiContainer />}
					domainPadding={{y : [0,5]}}
				>
					<VictoryArea 
						data={data} 
						interpolation={interpolation}
				    labels={d => d.y}
						labelComponent={<VictoryTooltip />}
					/>
					{ enablePoints && <VictoryScatter data={data} size={get(theme, 'scatter.style.data.size') || 3}/> }
				</VictoryChart>
			</div>
		</div>
	)
}

export default Chart
