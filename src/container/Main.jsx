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

const DefaultTheme = {
  "area": {
    "style": {
      "data": {
        "fill": "transparent",
        "strokeWidth": "4px",
        "stroke": "#2C98F0",
        "fillOpacity": 0
      },
      "labels": {
        "textAnchor": "middle",
        "fontFamily": "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        "fontSize": 12,
        "letterSpacing": "normal",
        "padding": 8,
        "fill": "#455A64",
        "stroke": "transparent",
        "strokeWidth": 0
      }
    },
    "width": 350,
    "height": 350,
    "padding": 50
  },
  "axis": {
    "style": {
      "axis": {
        "fill": "transparent",
        "stroke": "#90A4AE",
        "strokeWidth": 2,
        "strokeLinecap": "round",
        "strokeLinejoin": "round"
      },
      "axisLabel": {
        "textAnchor": "middle",
        "fontFamily": "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        "fontSize": 12,
        "letterSpacing": "normal",
        "padding": 8,
        "fill": "#455A64",
        "stroke": "transparent",
        "strokeWidth": 0
      },
      "grid": {
        "fill": "none",
        "stroke": "#ECEFF1",
        "strokeDasharray": "10, 5",
        "strokeLinecap": "round",
        "strokeLinejoin": "round",
        "pointerEvents": "painted"
      },
      "ticks": {
        "fill": "transparent",
        "size": 5,
        "stroke": "#90A4AE",
        "strokeWidth": 1,
        "strokeLinecap": "round",
        "strokeLinejoin": "round"
      },
      "tickLabels": {
        "fontFamily": "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        "fontSize": 12,
        "letterSpacing": "normal",
        "padding": 8,
        "fill": "#455A64",
        "stroke": "transparent",
        "strokeWidth": 0
      }
    },
    "width": 350,
    "height": 350,
    "padding": 50
  },
  "bar": {
    "style": {
      "data": {
        "fill": "#455A64",
        "padding": 8,
        "strokeWidth": 0
      },
      "labels": {
        "fontFamily": "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        "fontSize": 12,
        "letterSpacing": "normal",
        "padding": 8,
        "fill": "#455A64",
        "stroke": "transparent",
        "strokeWidth": 0
      }
    },
    "width": 350,
    "height": 350,
    "padding": 50
  },
  "boxplot": {
    "style": {
      "max": {
        "padding": 8,
        "stroke": "#455A64",
        "strokeWidth": 1
      },
      "maxLabels": {
        "fontFamily": "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        "fontSize": 12,
        "letterSpacing": "normal",
        "padding": 8,
        "fill": "#455A64",
        "stroke": "transparent",
        "strokeWidth": 0
      },
      "median": {
        "padding": 8,
        "stroke": "#455A64",
        "strokeWidth": 1
      },
      "medianLabels": {
        "fontFamily": "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        "fontSize": 12,
        "letterSpacing": "normal",
        "padding": 8,
        "fill": "#455A64",
        "stroke": "transparent",
        "strokeWidth": 0
      },
      "min": {
        "padding": 8,
        "stroke": "#455A64",
        "strokeWidth": 1
      },
      "minLabels": {
        "fontFamily": "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        "fontSize": 12,
        "letterSpacing": "normal",
        "padding": 8,
        "fill": "#455A64",
        "stroke": "transparent",
        "strokeWidth": 0
      },
      "q1": {
        "padding": 8,
        "fill": "#455A64"
      },
      "q1Labels": {
        "fontFamily": "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        "fontSize": 12,
        "letterSpacing": "normal",
        "padding": 8,
        "fill": "#455A64",
        "stroke": "transparent",
        "strokeWidth": 0
      },
      "q3": {
        "padding": 8,
        "fill": "#455A64"
      },
      "q3Labels": {
        "fontFamily": "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        "fontSize": 12,
        "letterSpacing": "normal",
        "padding": 8,
        "fill": "#455A64",
        "stroke": "transparent",
        "strokeWidth": 0
      }
    },
    "boxWidth": 20,
    "width": 350,
    "height": 350,
    "padding": 50
  },
  "candlestick": {
    "style": {
      "data": {
        "stroke": "#455A64"
      },
      "labels": {
        "textAnchor": "middle",
        "fontFamily": "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        "fontSize": 12,
        "letterSpacing": "normal",
        "padding": 8,
        "fill": "#455A64",
        "stroke": "transparent",
        "strokeWidth": 0
      }
    },
    "candleColors": {
      "positive": "#ffffff",
      "negative": "#455A64"
    },
    "width": 350,
    "height": 350,
    "padding": 50
  },
  "chart": {
    "width": 800,
    "height": 300,
    "padding": {
      "left": 50,
      "top": 50,
      "right": 50,
      "bottom": 50
    }
  },
  "errorbar": {
    "borderWidth": 8,
    "style": {
      "data": {
        "fill": "transparent",
        "opacity": 1,
        "stroke": "#455A64",
        "strokeWidth": 2
      },
      "labels": {
        "textAnchor": "middle",
        "fontFamily": "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        "fontSize": 12,
        "letterSpacing": "normal",
        "padding": 8,
        "fill": "#455A64",
        "stroke": "transparent",
        "strokeWidth": 0
      }
    },
    "width": 350,
    "height": 350,
    "padding": 50
  },
  "group": {
    "colorScale": [
      "#F4511E",
      "#FFF59D",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064"
    ],
    "width": 350,
    "height": 350,
    "padding": 50
  },
  "legend": {
    "colorScale": [
      "#F4511E",
      "#FFF59D",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064"
    ],
    "gutter": 10,
    "orientation": "vertical",
    "titleOrientation": "top",
    "style": {
      "data": {
        "type": "circle"
      },
      "labels": {
        "fontFamily": "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        "fontSize": 12,
        "letterSpacing": "normal",
        "padding": 8,
        "fill": "#455A64",
        "stroke": "transparent",
        "strokeWidth": 0
      },
      "title": {
        "fontFamily": "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        "fontSize": 12,
        "letterSpacing": "normal",
        "padding": 5,
        "fill": "#455A64",
        "stroke": "transparent",
        "strokeWidth": 0
      }
    }
  },
  "line": {
    "style": {
      "data": {
        "fill": "transparent",
        "opacity": 1,
        "stroke": "#455A64",
        "strokeWidth": 2
      },
      "labels": {
        "textAnchor": "middle",
        "fontFamily": "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        "fontSize": 12,
        "letterSpacing": "normal",
        "padding": 8,
        "fill": "#455A64",
        "stroke": "transparent",
        "strokeWidth": 0
      }
    },
    "width": 350,
    "height": 350,
    "padding": 50
  },
  "pie": {
    "colorScale": [
      "#F4511E",
      "#FFF59D",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064"
    ],
    "style": {
      "data": {
        "padding": 8,
        "stroke": "#ECEFF1",
        "strokeWidth": 1
      },
      "labels": {
        "fontFamily": "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        "fontSize": 12,
        "letterSpacing": "normal",
        "padding": 20,
        "fill": "#455A64",
        "stroke": "transparent",
        "strokeWidth": 0
      }
    },
    "width": 350,
    "height": 350,
    "padding": 50
  },
  "scatter": {
    "style": {
      "data": {
        "fill": "#455A64",
        "opacity": 1,
        "stroke": "transparent",
        "strokeWidth": 0
      },
      "labels": {
        "textAnchor": "middle",
        "fontFamily": "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        "fontSize": 12,
        "letterSpacing": "normal",
        "padding": 8,
        "fill": "#455A64",
        "stroke": "transparent",
        "strokeWidth": 0
      }
    },
    "width": 350,
    "height": 350,
    "padding": 50
  },
  "stack": {
    "colorScale": [
      "#F4511E",
      "#FFF59D",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064"
    ],
    "width": 350,
    "height": 350,
    "padding": 50
  },
  "tooltip": {
    "style": {
      "textAnchor": "middle",
      "fontFamily": "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
      "fontSize": 12,
      "letterSpacing": "normal",
      "padding": 5,
      "fill": "#455A64",
      "stroke": "transparent",
      "strokeWidth": 0,
      "pointerEvents": "none"
    },
    "flyoutStyle": {
      "stroke": "#212121",
      "strokeWidth": 1,
      "fill": "#f0f0f0",
      "pointerEvents": "none"
    },
    "cornerRadius": 5,
    "pointerLength": 10
  },
  "voronoi": {
    "style": {
      "data": {
        "fill": "transparent",
        "stroke": "transparent",
        "strokeWidth": 0
      },
      "labels": {
        "textAnchor": "middle",
        "fontFamily": "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        "fontSize": 12,
        "letterSpacing": "normal",
        "padding": 5,
        "fill": "#455A64",
        "stroke": "transparent",
        "strokeWidth": 0,
        "pointerEvents": "none"
      },
      "flyout": {
        "stroke": "#212121",
        "strokeWidth": 1,
        "fill": "#f0f0f0",
        "pointerEvents": "none"
      }
    },
    "width": 350,
    "height": 350,
    "padding": 50
  },
  "dependentAxis": {
    "style": {
      "grid": {
        "stroke": "#E0E0E0",
        "strokeDasharray": "None"
      },
      "axis": {
        "stroke": "transparent",
        "strokeWidth": "0px"
      },
      "tickLabels": {
        "fill": "#9e9e9e",
        "padding": 0,
        "fontFamily": "Roboto",
        "fontSize": "12px"
      },
      "ticks": {
        "strokeWidth": "0px",
        "stroke": "transparent"
      }
    },
    "width": 350,
    "height": 350,
    "padding": 50
  },
  "independentAxis": {
    "style": {
      "grid": {
        "stroke": "transparent"
      },
      "tickLabels": {
        "fontFamily": "Roboto",
        "fill": "#9e9e9e",
        "padding": 2,
        "fontSize": "12px"
      },
      "ticks": {
        "strokeWidth": "0px",
        "stroke": "transparent"
      },
      "axis": {
        "stroke": "#404040",
        "strokeWidth": "1px"
      }
    },
    "width": 350,
    "height": 350,
    "padding": 50
  }
}

const data = Array
						.from( { length : 50 }, (_, i) => i )
						.map( i => ({ x : i, y : numbers[i%(numbers.length)] }) )

class Main extends Component {
	constructor() {
		super()
		this.state = {
			theme : DefaultTheme,
			data : data,
			interpolation : 'linear',
			backgroundColor : '#FFFFFF',
			enableZoom : true,
			enableTooltips : false,
			enablePoints : false,
			width : '800px',
			height : '300px',
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
