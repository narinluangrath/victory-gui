import React, { Component } from 'react'
import { VictoryTheme } from 'victory'
import _set from 'lodash/set'

import Chart from '../presentational/Chart.jsx'
import Editor from './Editor.jsx'
import './DesignView.css'

class DesignView extends Component {
	constructor() {
		super()
		this.state = {
			theme : VictoryTheme.material,
			data : [
				{ x : 0, y : 0 },
				{ x : 1, y : 1 },
				{ x : 2, y : 2 },
				{ x : 3, y : 3 },
				{ x : 4, y : 4 },	
			]
		}
		this.changeData = this.changeData.bind( this )
		this.changeTheme = this.changeTheme.bind( this )
	}

	changeData() {
		return
	}

	deepClone( obj ) {
		return JSON.parse( JSON.stringify( obj ) )
	}

	changeTheme( field, value ) {
		this.setState( prevState => {
			const newTheme = this.deepClone( prevState.theme )
			_set( newTheme, field, c )
			return { theme : newTheme }
		})
	}

	render () {
		const { theme, data } = this.state
		return (
			<div className='designViewContainer'>
				<div className='chartContainer'>
					<Chart theme={theme} data={data}/>
				</div>
				<div className='editorContainer'>
					<Editor 
						theme={theme} 
						data={data} 
						changeTheme={this.changeTheme} 
						changeData={this.changeData}
					/>
				</div>
			</div>
		)
	}
} 

export default DesignView