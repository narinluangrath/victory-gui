import React, { Component } from 'react'
import { VictoryTheme } from 'victory'
import _set from 'lodash/set'

import Chart from '../presentational/Chart.jsx'
import Editor from './Editor.jsx'
import './Main.css'

const initData = Array.from( { length : 50 } )
											.forEach( i => ({ x : i, y : Math.random() }) )

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
			<div className='main'>
				<Editor 
					theme={theme} 
					data={dataTemp}
					chart={chart} 
					changeTheme={this.changeTheme} 
					changeData={this.changeData}
					changeChart={this.changeChart}
				/>
			</div>
		)
	}
} 

export default DesignView