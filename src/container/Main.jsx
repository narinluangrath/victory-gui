import React, { Component } from 'react'
import { VictoryTheme } from 'victory'
import _set from 'lodash/set'

import Chart from '../presentational/Chart.jsx'
// import Editor from './Editor.jsx'
import Theme from '../presentational/Theme.jsx'
import Data from '../presentational/Data.jsx'

import './Main.css'

const data = Array
						.from( { length : 50 }, (_, i) => i )
						.map( i => ({ x : i, y : Math.random() }) )

class Main extends Component {
	constructor() {
		super()
		this.state = {
			theme : VictoryTheme.material,
			data : data,
			interpolation : 'linear',
			backgroundColor : 'white',
			enableZoom : true,
			enableTooltips : false,
			enablePoints : false,
		}
		this.changeData = this.changeData.bind( this )
		this.changeTheme = this.changeTheme.bind( this )
		this.toggleZoom = this.toggleZoom.bind( this )
	}

	changeInterpolation( interpolation ) {
		this.setState({ interpolation })
	}

	changeBackground( color ) {
		this.setState({ backgroundColor : color })
	}

	toggleZoom() {
		this.setState( prev => ({ enableZoom : !prev.enableZoom }) )
	}

	toggleTooltips( ) {
		this.setState( prev => ({ enableTooltips : !prev.enableTooltips }) )
	}

	togglePoints( ) {
		this.setState( prev => ({ enablePoints : !prev.enablePoints }) )
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

	render () {
		const { theme, data, dataTemp, chart, enableZoom } = this.state
		return (
			<div className='main'>
				<Theme theme={theme} changeTheme={this.changeTheme}/>
				<Chart 
					theme={theme} 
					data={data}
					enableZoom={enableZoom}
					toggleZoom={this.toggleZoom}
				/>
			</div>
		)
	}
} 

export default Main
