import React, { Fragment } from 'react'
import _get from 'lodash/get'

function ColorBox( { color } ) {
	const style = {
		width : '20px',
		height : '20px',
		border : '1px solid #ddd',
		backgroundColor : color,
	}
	return <div style={style}/>
}

function TextBox( { color, onChange } ) {
	return (
		<input 
			type='text' 
			value={color} 
			onChange={onChange}
		/>
	)
}

function Attribute( props ) {
	const { onChange, name, value } = props
	return (
		<div className='attribute'>
			<p>{name}</p>
			<ColorBox color={value}/>
			<TextBox color={value} onChange={onChange}/>
		</div>
	)
}

        // fill: "transparent",
        // stroke: blueGrey300,
        // strokeWidth: 2,
        // strokeLinecap: strokeLinecap,
        // strokeLinejoin: strokeLinejoin

function Attributes( props ) {
	const { onChange, theme } = props
	return (
		<Fragment>
			<Attribute 
				name='Line (Stroke) Color'
				value={ _get( theme, 'line.style.data.stroke' ) }
				onChange={ e => onChange( 'line.style.data.stroke', e ) }
			/>
			<Attribute 
				name='Line (Stroke) Width'
				value={ _get( theme, 'line.style.data.strokeWidth' ) }
				onChange={ e => onChange( 'line.style.data.strokeWidth', e ) }
			/>
			<Attribute 
				name='Line Opacity'
				value={ _get( theme, 'line.style.data.opacity' ) }
				onChange={ e => onChange( 'line.style.data.opacity', e ) }
			/>
			<Attribute 
				name='Axis Fill'
				value={ _get( theme, 'axis.style.axis.fill' ) }
				onChange={ e => onChange( 'axis.style.axis.fill', e ) }
			/>
			<Attribute 
				name='Axis (Stroke) Color'
				value={ _get( theme, 'axis.style.axis.stroke' ) }
				onChange={ e => onChange( 'axis.style.axis.stroke', e ) }
			/>
			<Attribute 
				name='Axis (Stroke) Width'
				value={ _get( theme, 'axis.style.axis.strokeWidth' ) }
				onChange={ e => onChange( 'axis.style.axis.strokeWidth', e ) }
			/>
			<Attribute 
				name='Grid (Stroke) Color'
				value={ _get( theme, 'axis.style.grid.stroke' ) }
				onChange={ e => onChange( 'axis.style.grid.stroke', e ) }
			/>
			<Attribute 
				name='Axis Ticks (Stroke) Color'
				value={ _get( theme, 'axis.style.ticks.stroke' ) }
				onChange={ e => onChange( 'axis.style.ticks.stroke', e ) }
			/>
			<Attribute 
				name='Axis Ticks Width'
				value={ _get( theme, 'axis.style.ticks.strokeWidth' ) }
				onChange={ e => onChange( 'axis.style.ticks.strokeWidth', e ) }
			/>
			<Attribute 
				name='Axis Ticks Length (Size)'
				value={ _get( theme, 'axis.style.ticks.size' ) }
				onChange={ e => onChange( 'axis.style.ticks.size', e ) }
			/>
			<Attribute 
				name='Axis Tick Label Padding'
				value={ _get( theme, 'axis.style.tickLabels.padding' ) }
				onChange={ e => onChange( 'axis.style.tickLabels.padding', e ) }
			/>
			<Attribute 
				name='Axis Tick Label Fill'
				value={ _get( theme, 'axis.style.tickLabels.fill' ) }
				onChange={ e => onChange( 'axis.style.tickLabels.fill', e ) }
			/>
			<Attribute 
				name='Axis Tick Font Size'
				value={ _get( theme, 'axis.style.tickLabels.fontSize' ) }
				onChange={ e => onChange( 'axis.style.tickLabels.fontSize', e ) }
			/>
			<Attribute 
				name='Background Color'
				value={ _get( theme, 'axis.style.grid.fill' ) }
				onChange={ e => onChange( 'axis.style.grid.fill', e ) }
			/>			
		</Fragment>
	)
}

        // fill: "transparent",
        // size: 5,
        // stroke: blueGrey300,
        // strokeWidth: 1,
        // strokeLinecap: strokeLinecap,
        // strokeLinejoin: strokeLinejoin

        // fill: "none",
        // stroke: blueGrey50,
        // strokeDasharray: strokeDasharray,
        // strokeLinecap: strokeLinecap,
        // strokeLinejoin: strokeLinejoin,
        // pointerEvents: "painted"

export default Attributes