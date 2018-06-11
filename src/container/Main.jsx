import React, { Component } from 'react'
import { VictoryTheme } from 'victory'
import set from 'lodash/set'

import Chart from '../presentational/Chart.jsx'
import Theme from '../presentational/Theme.jsx'

import './Main.css'

const data = Array
						.from( { length : 50 }, (_, i) => i )
						.map( i => ({ x : i, y : Math.sin(i/5) }) )

class Main extends Component {
	constructor() {
		super()
		this.state = {
			theme : VictoryTheme.material,
			data : data,
			interpolation : 'linear',
			backgroundColor : '#FFFFFF',
			enableZoom : true,
			enableTooltips : false,
			enablePoints : false,
		}
		this.changeData = this.changeData.bind( this )
		this.changeTheme = this.changeTheme.bind( this )
		this.toggleZoom = this.toggleZoom.bind( this )
		this.changeInterpolation = this.changeInterpolation.bind( this )
		this.changeBackground = this.changeBackground.bind( this )
		this.toggleTooltips = this.toggleTooltips.bind( this )

	}

	changeInterpolation( interpolation ) {
		this.setState({ interpolation })
	}

	changeBackground( color ) {
		this.setState({ backgroundColor : color })
	}

	toggleZoom( ) {
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
		this.setState( prev => {
			const newTheme = this.deepClone( prev.theme )
			set( newTheme, field, value )
			return { theme : newTheme }
		})
	}

	render () {
		const { theme, data, dataTemp, chart, enableZoom, interpolation, backgroundColor, enableTooltips } = this.state
		return (
			<div className='main'>
				<Theme 
					theme={theme} 
					changeTheme={this.changeTheme}
				/>
				<Chart 
					theme={theme} 
					data={data}
					enableZoom={enableZoom}
					toggleZoom={this.toggleZoom}
					interpolation={interpolation}
					changeInterpolation={this.changeInterpolation}
					backgroundColor={backgroundColor}
					changeBackground={this.changeBackground}
					enableTooltips={enableTooltips}
					toggleTooltips={this.toggleTooltips}
				/>
			</div>
		)
	}
} 

export default Main
