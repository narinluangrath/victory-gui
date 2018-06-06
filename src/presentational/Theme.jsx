import React, { Component } from 'react'
import _get from 'lodash/get'

import Dropdown from '../container/Dropdown.jsx'
import Attribute from '../container/Attribute.jsx'
import './Theme.css'

function Theme( props ) {
	const { theme, changeTheme } = props
	
	function onChange( field, event ) {
		let text = event.target.value
		if ( text && text !== '' ) {
			const asNum = Number( text )
			const isNum = !Number.isNaN( asNum )
			if ( isNum ) { 
				text = asNum
			}
			changeTheme( field, text )
		} else {
			changeTheme( field, '' )
		} 
	}

	return (
		<div className='theme'>
			<h3>Theme Design</h3>
			<Dropdown title='Title'>
				<Attribute name='attribute' value='value'/>
				<Attribute name='attribute' value='value'/>
				<Attribute name='attribute' value='value'/>
				<Attribute name='attribute' value='value'/>
			</Dropdown>
			<Dropdown title='Title'>
				<Attribute name='attribute' value='value'/>
				<Attribute name='attribute' value='value'/>
				<Attribute name='attribute' value='value'/>
				<Attribute name='attribute' value='value'/>
			</Dropdown>
			<Dropdown title='Title'>
				<Attribute name='attribute' value='value'/>
				<Attribute name='attribute' value='value'/>
				<Attribute name='attribute' value='value'/>
				<Attribute name='attribute' value='value'/>
			</Dropdown>
			<Dropdown title='Title'>
				<Attribute name='attribute' value='value'/>
				<Attribute name='attribute' value='value'/>
				<Attribute name='attribute' value='value'/>
				<Attribute name='attribute' value='value'/>
			</Dropdown>
			<Dropdown title='Title'>
				<Attribute name='attribute' value='value'/>
				<Attribute name='attribute' value='value'/>
				<Attribute name='attribute' value='value'/>
				<Attribute name='attribute' value='value'/>
			</Dropdown>
			<Dropdown title='Title'>
				<Attribute name='attribute' value='value'/>
				<Attribute name='attribute' value='value'/>
				<Attribute name='attribute' value='value'/>
				<Attribute name='attribute' value='value'/>
			</Dropdown>
			<Dropdown title='Title'>
				<Attribute name='attribute' value='value'/>
				<Attribute name='attribute' value='value'/>
				<Attribute name='attribute' value='value'/>
				<Attribute name='attribute' value='value'/>
			</Dropdown>
			<Dropdown title='Title'>
				<Attribute name='attribute' value='value'/>
				<Attribute name='attribute' value='value'/>
				<Attribute name='attribute' value='value'/>
				<Attribute name='attribute' value='value'/>
			</Dropdown>

		</div>
	)
}


		// <div className='theme'>
		// 	<DropDown title='General'>
		// 		<Attribute 
		// 			name='Width'
		// 			value={ _get( theme, 'chart.width' ) }
		// 			onChange={ e => onChange( 'chart.width', e ) }
		// 		/>
		// 		<Attribute 
		// 			name='Height'
		// 			value={ _get( theme, 'chart.height' ) }
		// 			onChange={ e => onChange( 'chart.height', e ) }
		// 		/>
		// 		<Attribute 
		// 			name='Padding'
		// 			value={ _get( theme, 'chart.padding' ) }
		// 			onChange={ e => onChange( 'chart.padding', e ) }
		// 		/>
		// 	</DropDown>
		// 	<DropDown title='Line'>
		// 		<Attribute 
		// 			name='Line (Stroke) Color'
		// 			value={ _get( theme, 'line.style.data.stroke' ) }
		// 			onChange={ e => onChange( 'line.style.data.stroke', e ) }
		// 		/>
		// 		<Attribute 
		// 			name='Line (Stroke) Width'
		// 			value={ _get( theme, 'line.style.data.strokeWidth' ) }
		// 			onChange={ e => onChange( 'line.style.data.strokeWidth', e ) }
		// 		/>
		// 		<Attribute 
		// 			name='Line Opacity'
		// 			value={ _get( theme, 'line.style.data.opacity' ) }
		// 			onChange={ e => onChange( 'line.style.data.opacity', e ) }
		// 		/>
		// 	</DropDown>
		// 	<DropDown title='Axis'>
		// 		<Attribute 
		// 			name='Axis (Stroke) Color'
		// 			value={ _get( theme, 'axis.style.axis.stroke' ) }
		// 			onChange={ e => onChange( 'axis.style.axis.stroke', e ) }
		// 		/>
		// 		<Attribute 
		// 			name='Axis (Stroke) Width'
		// 			value={ _get( theme, 'axis.style.axis.strokeWidth' ) }
		// 			onChange={ e => onChange( 'axis.style.axis.strokeWidth', e ) }
		// 		/>
		// 		<Attribute 
		// 			name='Axis Label Padding'
		// 			value={ _get( theme, 'axis.style.axisLabel.padding' ) }
		// 			onChange={ e => onChange( 'axis.style.axisLabel.padding', e ) }
		// 		/>
		// 	</DropDown>
		// 	<DropDown title='Grid'>
		// 		<Attribute 
		// 			name='Grid (Stroke) Color'
		// 			value={ _get( theme, 'axis.style.grid.stroke' ) }
		// 			onChange={ e => onChange( 'axis.style.grid.stroke', e ) }
		// 		/>
		// 	</DropDown>
		// 	<DropDown title='Tick Marks'>
		// 		<Attribute 
		// 			name='Axis Ticks (Stroke) Color'
		// 			value={ _get( theme, 'axis.style.ticks.stroke' ) }
		// 			onChange={ e => onChange( 'axis.style.ticks.stroke', e ) }
		// 		/>
		// 		<Attribute 
		// 			name='Axis Ticks Width'
		// 			value={ _get( theme, 'axis.style.ticks.strokeWidth' ) }
		// 			onChange={ e => onChange( 'axis.style.ticks.strokeWidth', e ) }
		// 		/>
		// 		<Attribute 
		// 			name='Axis Ticks Length (Size)'
		// 			value={ _get( theme, 'axis.style.ticks.size' ) }
		// 			onChange={ e => onChange( 'axis.style.ticks.size', e ) }
		// 		/>
		// 		<Attribute 
		// 			name='Axis Tick Label Padding'
		// 			value={ _get( theme, 'axis.style.tickLabels.padding' ) }
		// 			onChange={ e => onChange( 'axis.style.tickLabels.padding', e ) }
		// 		/>
		// 		<Attribute 
		// 			name='Axis Tick Label Fill'
		// 			value={ _get( theme, 'axis.style.tickLabels.fill' ) }
		// 			onChange={ e => onChange( 'axis.style.tickLabels.fill', e ) }
		// 		/>
		// 		<Attribute 
		// 			name='Axis Tick Font Size'
		// 			value={ _get( theme, 'axis.style.tickLabels.fontSize' ) }
		// 			onChange={ e => onChange( 'axis.style.tickLabels.fontSize', e ) }
		// 		/>
		// 	</DropDown>
		// </div>

export default Theme
