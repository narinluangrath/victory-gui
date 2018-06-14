import React from 'react'
import JSZip from 'jszip'
import FileSaver from 'file-saver'

import './Export.css'


function ChartFile( backgroundColor, width, height, isTimeseries, pointSize, interpolation, enableZoom, enableTooltips, enablePoints ) {
	return `
import React from 'react'
import { 
	VictoryChart, 
	VictoryScatter, 
	VictoryTooltip, 
	VictoryAxis, 
	VictoryArea, 
	VictoryZoomContainer,
	createContainer, 
	VictoryVoronoiContainer 
} from 'victory'
import theme from './theme.js'
import data from './data.json'

export default function VictoryWrapper( ) {

	const containerOps = [${[ enableZoom && "'zoom'", enableTooltips && "'voronoi'" ].filter( x => x != null && x != false )}]
	const VictoryZoomVoronoiContainer = createContainer( ...containerOps )

	return (
		<div className='chart' style={{backgroundColor : "${backgroundColor}", width : "${width}", height : "${height}"}}>
			<VictoryChart 
			  scale={{ x : ${isTimeseries ? "'time'" : "'linear'"} }}
				theme={theme} 
				containerComponent={<VictoryZoomVoronoiContainer />}
				domainPadding={{y : [0,5]}}
			>
				<VictoryArea 
					data={data} 
					interpolation={"${interpolation}"}
			    labels={d => d.y}
					labelComponent={<VictoryTooltip flyoutStyle={theme.tooltip.flyoutStyle} style={theme.tooltip.style} />}
				/>
				${ enablePoints ? `<VictoryScatter data={data} size={${pointSize || 3}}/>` : null }
			</VictoryChart>
		</div>
	)
}
	`
}

function ThemeFile( theme ) {
	return JSON.stringify( theme, null, 2 )
}

function DataFile( data ) {
	return JSON.stringify( data, null, 2 )
}

function IndexFile() {
	return `
import VictoryWrapper from './VictoryWrapper.jsx'
export default VictoryWrapper
	`
}

function Export( props ) {

	// width, 
	// height,
	// theme, 
	// data, 
	// chart, 
	// enableZoom, 
	// toggleZoom, 
	// changeInterpolation, 
	// interpolation, 
	// backgroundColor, 
	// changeBackground, 
	// toggleTooltips, 
	// enableTooltips,
	// enablePoints,
	// togglePoints,
	// loadTheme,
	// isTimeseries

	function download() {

		// backgroundColor, width, height, isTimeseries, pointSize, interpolation, enableZoom, enableTooltips, enablePoints
		const pointSize = props.theme.scatter.style.data.size
		const chartFile = ChartFile( props.backgroundColor, 
																 props.width, 
																 props.height, 
																 props.isTimeseries, 
																 pointSize, 
																 props.interpolation, 
																 props.enableZoom, 
																 props.enableTooltips,
																 props.enablePoints
																)
		const themeFile = ThemeFile( props.theme )
		const dataFile = DataFile( props.data )
		const indexFile = IndexFile()

		const zip = new JSZip();
		zip.file( "/Chart/VictoryWrapper.jsx", chartFile )
		zip.file( "/Chart/theme.json", themeFile )
		zip.file( "/Chart/data.json", dataFile )
		zip.file( "/Chart/index.js", indexFile )
    zip.generateAsync( { type : "blob" } )
       .then( blob => FileSaver.saveAs( blob, "Chart.zip" ) )
	}
	
	const text = `Download the chart as a React Component and add it to your web application!`
	const moar = `After downloading the Chart folder and adding it to your repository's /src folder, you'll need to run "npm install victory".`
	const evenMoar = `Be sure to also download any fonts the chart uses (i.e. Lato, Roboto, etc.). You can do so at fonts.google.com`

	return ( 
		<div className='export'>
			<p>{text}</p>
			{moar}<br /><br />
			{evenMoar}
      <button className='button' onClick={download}>Download</button>
		</div>
	)
}

export default Export
