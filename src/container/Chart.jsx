import React, { Component } from 'react'
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory'
import _set from 'lodash/set'

import Attributes from '../presentational/Attributes.jsx'

const data = [
	{ x : 0, y : 0 },
	{ x : 1, y : 1 },
	{ x : 2, y : 2 },
	{ x : 3, y : 3 },
	{ x : 4, y : 4 },	
]

class Chart extends Component {

	constructor( props ) {
		super( props )
		this.state = {
			theme : VictoryTheme.material,
			data : data,
		}
		this.onChange = this.onChange.bind( this )
	}

	onChange( field, e ) {
		let c = e.target.value
		c = Number.isNaN( Number(c) ) ? c : Number(c)
		this.setState( prevState => {
			// need to do a deep clone because react is dumb
			const newTheme = JSON.parse( JSON.stringify( prevState.theme ) )
			_set( newTheme, field, c )
			return { theme : newTheme }
		})
		e.preventDefault()
	}

	render() {
		return (
			<div className='main'>
				<VictoryChart theme={this.state.theme} >
					<VictoryLine data={this.state.data} />
				</VictoryChart>
				<Attributes
					onChange={this.onChange}
					theme={this.state.theme}
				/>
			</div>
		)
	}
}

export default Chart
