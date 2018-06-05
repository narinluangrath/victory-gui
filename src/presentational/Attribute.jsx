import React from 'react'
import { SketchPicker } from 'react-color'

function ColorBox( { color } ) {
	const style = {
		width : '20px',
		height : '20px',
		border : '1px solid #ddd',
		backgroundColor : color || 'white',
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

function ColorAttribute( { onChange, name, value, icon } ) {
	return (
		<SketchPicker 
			color={value} 
			onChange={e => onChange({target: {value :e.hex}})} 
		/>
	)
}

function Attribute( { onChange, name, value, icon, type } ) {
	return (
		<div className='attribute'>
			<p>{name}</p>
			<ColorAttribute onChange={onChange} value={value} />
			<TextBox color={value} onChange={onChange}/>
		</div>
	)
}

export default Attribute
