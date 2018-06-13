import React, { Component } from 'react'
import { VictoryTheme } from 'victory'
import { set } from '../utils'

import Chart from '../presentational/Chart.jsx'
import Theme from '../presentational/Theme.jsx'
import Sidebar from './Sidebar.jsx'
import DesignFiles from '../themes'

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
		this.state = DesignFiles.Dark
		this.changeData = this.changeData.bind( this )
		this.changeTheme = this.changeTheme.bind( this )
		this.toggleZoom = this.toggleZoom.bind( this )
		this.changeInterpolation = this.changeInterpolation.bind( this )
		this.changeBackground = this.changeBackground.bind( this )
		this.toggleTooltips = this.toggleTooltips.bind( this )
		this.changeWidth = this.changeWidth.bind( this )
		this.changeHeight = this.changeHeight.bind( this )
		this.togglePoints = this.togglePoints.bind( this )
		this.loadTheme = this.loadTheme.bind( this )
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
		this.setState( { data : value } )
	}

	changeTheme( field, value ) {
		this.setState( prev => {
			const newTheme = this.deepClone( prev.theme )
			set( newTheme, field, value )
			return { theme : newTheme }
		})
	}

	loadTheme( name ) {
		this.setState( DesignFiles[name] )
	}

	render () {
		console.log( JSON.stringify( this.state, null, 2 ) )
		const { theme, data, changeData, chart, enableZoom, interpolation, backgroundColor, enableTooltips, width, height, enablePoints } = this.state
		const sidebarProps = {
			data,
			changeData : this.changeData,
			enableZoom, 
			toggleZoom : this.toggleZoom, 
			enableTooltips, 
			toggleTooltips : this.toggleTooltips, 
			enablePoints, 
			togglePoints : this.togglePoints, 
		}
		return (
			<div className='main'>
				<Theme 
					theme={theme} 
					changeTheme={this.changeTheme}
					changeWidth={this.changeWidth}
					changeHeight={this.changeHeight}
					changeInterpolation={this.changeInterpolation}
					interpolation={interpolation}
					changeBackground={this.changeBackground}
					backgroundColor={backgroundColor}
				/>
				<Chart 
					theme={theme} 
					data={data}
					enableZoom={enableZoom}
					toggleZoom={this.toggleZoom}
					backgroundColor={backgroundColor}
					enableTooltips={enableTooltips}
					toggleTooltips={this.toggleTooltips}
					enablePoints={enablePoints}
					togglePoints={this.togglePoints}
					width={width}
					height={height}
					loadTheme={this.loadTheme}
					interpolation={interpolation}					
				/>
				<Sidebar {...sidebarProps} />
			</div>
		)
	}
} 

export default Main
