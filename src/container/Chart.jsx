import React, { Component } from 'react'
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory'
import _set from 'lodash/set'
import _get from 'lodash/get'

import Attribute from '../presentational/Attribute.jsx'

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
	}

	onChange( field, e ) {
		const c = e.target.value
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
					<VictoryLine data={data} />
				</VictoryChart>
				<Attribute 
					name='Line Color'
					value={_get( this.state.theme, 'line.style.data.stroke' )}
					onChange={this.onChange.bind( this, 'line.style.data.stroke' )}
				/>
			</div>
		)
	}
}

export default Chart
