import React from 'react'
import _get from 'lodash/get'

import './Data.css'
//import Attribute from './Attribute.jsx'

function Datum( { x, y } ) {
	return (
		<div className='datum'>
			<div>
				<div className='char'><p>X</p></div>
				<input value={x} />
			</div>
			<div>
				<div className='char'><p>Y</p></div>
				<input value={y} />
			</div>
		</div>
	)
}

function Data( { data, chart, changeData, changeChart } ) {

	function onChangeData( event ) {
		const text = event.target.value || ''
		changeData( text )
	}

	function onChangeChart( field, event ) {
		const text = event.target.value || ''
		changeChart( field, text )
	}

	return (
		<div className='data'>
			<h3>Data Editor</h3>
			<Datum x={10} y={Math.round(Math.random()*10)}/>
			<Datum x={10} y={Math.round(Math.random()*10)}/>
			<Datum x={10} y={Math.round(Math.random()*10)}/>
			<Datum x={10} y={Math.round(Math.random()*10)}/>
			<Datum x={10} y={Math.round(Math.random()*10)}/>
			<Datum x={10} y={Math.round(Math.random()*10)}/>
			<Datum x={10} y={Math.round(Math.random()*10)}/>
			<Datum x={10} y={Math.round(Math.random()*10)}/>
			<Datum x={10} y={Math.round(Math.random()*10)}/>
			<Datum x={10} y={Math.round(Math.random()*10)}/>
			<Datum x={10} y={Math.round(Math.random()*10)}/>
			<Datum x={10} y={Math.round(Math.random()*10)}/>
			<Datum x={10} y={Math.round(Math.random()*10)}/>
			<Datum x={10} y={Math.round(Math.random()*10)}/>
			<Datum x={10} y={Math.round(Math.random()*10)}/>
			<Datum x={10} y={Math.round(Math.random()*10)}/>
			<Datum x={10} y={Math.round(Math.random()*10)}/>
			<Datum x={10} y={Math.round(Math.random()*10)}/>
			<Datum x={10} y={Math.round(Math.random()*10)}/>
			<Datum x={10} y={Math.round(Math.random()*10)}/>
			<Datum x={10} y={Math.round(Math.random()*10)}/>
			<Datum x={10} y={Math.round(Math.random()*10)}/>
		</div>
	)
}

			// <textarea value={data} onChange={onChangeData} />
			// <Attribute 
			// 	onChange={e => onChangeChart( 'xAxis.label', e)} 
			// 	name='X-Axis Label' 
			// 	value={_get( chart, 'xAxis.label')} 
			// />
			// <Attribute 
			// 	onChange={e => onChangeChart( 'yAxis.label', e)} 
			// 	name='Y-Axis Label' 
			// 	value={_get( chart, 'yAxis.label')} 
			// />
			// <Attribute 
			// 	onChange={e => onChangeChart( 'line.interpolation', e)} 
			// 	name='Interpolation' 
			// 	value={_get( chart, 'line.interpolation')} 
			// />

export default Data

