import React, { Component } from 'react'
import { VictoryTheme } from 'victory'
import set from 'lodash/set'

import Chart from '../presentational/Chart.jsx'
import Theme from '../presentational/Theme.jsx'

import './Main.css'

const numbers = [ 
	69,70,69,64,73,75,74,73,76,78,81,84,84,90,94,
	94,90,94,94,90,93,97,73,98,94,94,80,64,78,93,89,97,
	97,96,91,97,93,86,89,86,84,89,89,93,90,87,83,83,75,76,
]

const data = Array
						.from( { length : 50 }, (_, i) => i )
						.map( i => ({ x : i, y : numbers[i%(numbers.length)] }) )

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
			width : '400px',
			height : '400px',
		}
		this.changeData = this.changeData.bind( this )
		this.changeTheme = this.changeTheme.bind( this )
		this.toggleZoom = this.toggleZoom.bind( this )
		this.changeInterpolation = this.changeInterpolation.bind( this )
		this.changeBackground = this.changeBackground.bind( this )
		this.toggleTooltips = this.toggleTooltips.bind( this )
		this.changeWidth = this.changeWidth.bind( this )
		this.changeHeight = this.changeHeight.bind( this )
	}

	changeWidth( width ) {
		this.setState( { width } )
	}

	changeHeight( height ) {
		this.setState( { height } )
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
			console.log( JSON.stringify( newTheme, null, 2 ) )
			return { theme : newTheme }
		})
	}

	render () {
		const { theme, data, dataTemp, chart, enableZoom, interpolation, backgroundColor, enableTooltips, width, height } = this.state
		return (
			<div className='main'>
				<Theme 
					theme={theme} 
					changeTheme={this.changeTheme}
					changeWidth={this.changeWidth}
					changeHeight={this.changeHeight}
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
					width={width}
					height={height}
				/>
			</div>
		)
	}
} 

export default Main
