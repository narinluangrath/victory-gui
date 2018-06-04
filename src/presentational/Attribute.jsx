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

export default Attribute
