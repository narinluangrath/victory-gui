import React, { Component } from 'react'
import { VictoryTheme } from 'victory'
import _set from 'lodash/set'

import Chart from '../presentational/Chart.jsx'
import Editor from './Editor.jsx'
import './DesignView.css'

const initData = [
	{ x : 0, y : 0 },
	{ x : 1, y : 1 },
	{ x : 2, y : 2 },
	{ x : 3, y : 3 },
	{ x : 4, y : 4 },	
	{ x : 5, y : 0 },
	{ x : 6, y : 10 },
	{ x : 7, y : 3 },
	{ x : 8, y : 3 },
	{ x : 9, y : 7 },	
	{ x : 10, y : 6 },
	{ x : 11, y : 2 },
	{ x : 12, y : 1 },
	{ x : 13, y : 1 },
	{ x : 14, y : 7 },	
]

class DesignView extends Component {
	constructor() {
		super()
		this.state = {
			theme : VictoryTheme.material,
			data : initData,
			dataTemp : JSON.stringify( initData ),
			chart : {
				xAxis : { label : 'X-Axis label' },
				yAxis : { label : 'Y-Axis label' },
				line : { interpolation : 'basis' }
			}
		}
		this.changeData = this.changeData.bind( this )
		this.changeTheme = this.changeTheme.bind( this )
		this.changeChart = this.changeChart.bind( this )
	}

	deepClone( obj ) {
		return JSON.parse( JSON.stringify( obj ) )
	}

	changeData( value ) {
		try {
			const newData = JSON.parse( value )
			this.setState( { data : newData, dataTemp : value } )		
		} catch (e) {
			this.setState( { dataTemp : value } )
		}
	}

	changeTheme( field, value ) {
		this.setState( prevState => {
			const newTheme = this.deepClone( prevState.theme )
			_set( newTheme, field, value )
			return { theme : newTheme }
		})
	}

	changeChart( field, value ) {
		this.setState( prevState => {
			const newChart = this.deepClone( prevState.chart )
			_set( newChart, field, value )
			return { chart : newChart }
		})
	}

	render () {
		const { theme, data, dataTemp, chart } = this.state
		return (
			<div className='designViewContainer'>
				<div className='chartContainer'>
					<Chart theme={theme} data={data} chart={chart}/>
				</div>
				<div className='editorContainer'>
					<Editor 
						theme={theme} 
						data={dataTemp}
						chart={chart} 
						changeTheme={this.changeTheme} 
						changeData={this.changeData}
						changeChart={this.changeChart}
					/>
				</div>
			</div>
		)
	}
} 

export default DesignView