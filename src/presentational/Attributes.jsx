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

function Attributes( props ) {
	const { onChange, theme } = props
	return (
		<Fragment>
			<Attribute 
				name='Line Color'
				value={ _get( theme, 'line.style.data.stroke' ) }
				onChange={ e => onChange( 'line.style.data.stroke', e ) }
			/>
			<Attribute 
				name='Line Width'
				value={ _get( theme, 'line.style.data.strokeWidth' ) }
				onChange={ e => onChange( 'line.style.data.strokeWidth', e ) }
			/>
			<Attribute 
				name='Line Opacity'
				value={ _get( theme, 'line.style.data.opacity' ) }
				onChange={ e => onChange( 'line.style.data.opacity', e ) }
			/>
		</Fragment>
	)
}

export default Attributes