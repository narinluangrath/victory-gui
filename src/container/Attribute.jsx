import React, { Component } from 'react'
import { SketchPicker } from 'react-color'

import './Attribute.css'

// function ColorBox( { color } ) {
// 	const style = {
// 		width : '20px',
// 		height : '20px',
// 		border : '1px solid #ddd',
// 		backgroundColor : color || 'white',
// 	}
// 	return <div style={style}/>
// }

// function TextBox( { color, onChange } ) {
// 	return (
// 		<input 
// 			type='text' 
// 			value={color} 
// 			onChange={onChange}
// 		/>
// 	)
// }

// function ColorAttribute( { onChange, name, value, icon } ) {
// 	return (
// 		<SketchPicker 
// 			color={value} 
// 			onChange={e => onChange({target: {value :e.hex}})} 
// 		/>
// 	)
// }

class Attribute extends Component {
	constructor() {
		super( )
		this.state = { open : false }
	}

	render() {
		const { name, value, children } = this.props
		return (
			<div className='attr'>
				<div className='attr-header'>
					<div className='attr-name'>{name}</div>
					<div className='attr-value'>{value}</div>
				</div>
				<div className='attr-children'>
					{children}
				</div>
			</div>
		)
	}
}

export default Attribute
