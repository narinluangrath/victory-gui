import React from 'react'
import _get from 'lodash/get'

import Attribute from './Attribute.jsx'

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
		<div>
			<textarea value={data} onChange={onChangeData} />
			<Attribute 
				onChange={e => onChangeChart( 'xAxis.label', e)} 
				name='X-Axis Label' 
				value={_get( chart, 'xAxis.label')} 
			/>
			<Attribute 
				onChange={e => onChangeChart( 'yAxis.label', e)} 
				name='Y-Axis Label' 
				value={_get( chart, 'yAxis.label')} 
			/>
			<Attribute 
				onChange={e => onChangeChart( 'line.interpolation', e)} 
				name='Interpolation' 
				value={_get( chart, 'line.interpolation')} 
			/>
		</div>
	)
}

export default Data

