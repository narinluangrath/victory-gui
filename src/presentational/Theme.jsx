import React, { Component } from 'react'
import get from 'lodash/get'

import Dropdown from '../container/Dropdown.jsx'
import Attribute from '../container/Attribute.jsx'
import ColorPicker from './ColorPicker.jsx'
import Menu from './Menu.jsx'
import './Theme.css'

function Theme( props ) {
	const { theme, changeTheme } = props
	
	function onChangeColor( field, event ) {
		let text = event.target.value
		if ( text && text !== '' ) {
			const asNum = Number( text )
			const isNum = !Number.isNaN( asNum )
			if ( isNum ) { 
				text = asNum
			}
			changeTheme( field, '#' + text )
		} else {
			changeTheme( field, '' )
		} 
	}

	function onChangeNumber( field, value ) {
		changeTheme( field, value )
	}

	function getAspectRatio( theme ) {
		const width = get( theme, 'chart.width' )
		const height = get( theme, 'chart.height' )
		return `${width}x${height}`
	}

	function setAspectRatio( ar ) {
		const [ width, height ] = ar.split( 'x' )
		onChangeNumber( 'chart.width', Number(width) )
		onChangeNumber( 'chart.height', Number(height) )
	}

	function getGridStyle( theme, field ) {
		const val = get( theme, field )
		if ( val === '10, 5' ) return 'Dashed'
		return 'Solid'
	}

	function setGridStyle( val, field ) {
		if ( val === 'Dashed' ) onChangeNumber( field, '10, 5' )
		else onChangeNumber( field, 'None' )
	}

//axis.style.grid.stroke

	return (
		<div className='theme'>
			<h3>Theme Design</h3>
			<Dropdown title='General'>
				<Attribute
					name='Aspect Ratio'
					value={getAspectRatio(theme)}
				>
					<Menu 
						items={['400x150', '400x200', '400x250', '400x300', '400x350', '400x400']}
						selected={getAspectRatio(theme)}
						onChange={setAspectRatio}
					/>
				</Attribute>
				<Attribute 
					name='Horizontal Grid Color' 
					value={get(theme, 'dependentAxis.style.grid.stroke')}
				>
					<ColorPicker 
						value={get(theme,'dependentAxis.style.grid.stroke')} 
						onChange={e => onChangeColor('dependentAxis.style.grid.stroke', e)}
					/>					
				</Attribute>				
				<Attribute 
					name='Vertical Grid Color' 
					value={get(theme, 'independentAxis.style.grid.stroke')}
				>
					<ColorPicker 
						value={get(theme,'independentAxis.style.grid.stroke')} 
						onChange={e => onChangeColor('independentAxis.style.grid.stroke', e)}
					/>					
				</Attribute>
				<Attribute 
					name='Horizontal Grid Style' 
					value={getGridStyle(theme, 'dependentAxis.style.grid.strokeDasharray')}
				>
					<Menu 
						items={['Dashed', 'Solid']}
						selected={getGridStyle(theme, 'dependentAxis.style.grid.strokeDasharray')}
						onChange={v => setGridStyle(v, 'dependentAxis.style.grid.strokeDasharray')} 
					/>					
				</Attribute>				
				<Attribute 
					name='Vertical Grid Style' 
					value={getGridStyle(theme, 'independentAxis.style.grid.strokeDasharray')}
				>
					<Menu 
						items={['Dashed', 'Solid']}
						selected={getGridStyle(theme, 'independentAxis.style.grid.strokeDasharray')}
						onChange={v => setGridStyle(v, 'independentAxis.style.grid.strokeDasharray')} 
					/>				
				</Attribute>				
			</Dropdown>
			<Dropdown title='Line'>
				<Attribute 
					name='Color' 
					value={get(theme,'line.style.data.stroke')}
				>
					<ColorPicker 
						value={get(theme,'line.style.data.stroke')} 
						onChange={e => onChangeColor('line.style.data.stroke', e)}
					/>
				</Attribute>
				<Attribute 
					name='Width' 
					value={get(theme,'line.style.data.strokeWidth')}
				>
					<Menu 
						items={['0px', '1px', '2px', '3px', '4px', '5px']}
						selected={get(theme,'line.style.data.strokeWidth')}
						onChange={v => onChangeNumber('line.style.data.strokeWidth',v)} 
					/>
				</Attribute>
			</Dropdown>
			<Dropdown title='Axis'>
				<Attribute 
					name='X-Axis Color' 
					value={get(theme, 'independentAxis.style.axis.stroke')}
				>
					<ColorPicker 
						value={get(theme,'independentAxis.style.axis.stroke')} 
						onChange={e => onChangeColor('independentAxis.style.axis.stroke', e)}
					/>					
				</Attribute>
				<Attribute 
					name='X-Axis Width' 
					value={get(theme, 'independentAxis.style.axis.strokeWidth')}
				>
					<Menu 
						items={['0px', '1px', '2px', '3px', '4px', '5px']}
						selected={get(theme,'independentAxis.style.axis.strokeWidth')}
						onChange={v => onChangeNumber('independentAxis.style.axis.strokeWidth',v)} 
					/>				
				</Attribute>
				<Attribute 
					name='Y-Axis Color' 
					value={get(theme, 'dependentAxis.style.axis.stroke')}
				>
					<ColorPicker 
						value={get(theme,'dependentAxis.style.axis.stroke')} 
						onChange={e => onChangeColor('dependentAxis.style.axis.stroke', e)}
					/>					
				</Attribute>	
				<Attribute 
					name='Y-Axis Width' 
					value={get(theme, 'dependentAxis.style.axis.strokeWidth')}
				>
					<Menu 
						items={['0px', '1px', '2px', '3px', '4px', '5px']}
						selected={get(theme,'dependentAxis.style.axis.strokeWidth')}
						onChange={v => onChangeNumber('dependentAxis.style.axis.strokeWidth',v)} 
					/>				
				</Attribute>			
			</Dropdown>
			<Dropdown title='Tick Marks'>
				<Attribute 
					name='X-Axis Color' 
					value={get(theme, 'independentAxis.style.ticks.stroke')}
				>
					<ColorPicker 
						value={get(theme,'independentAxis.style.ticks.stroke')} 
						onChange={e => onChangeColor('independentAxis.style.ticks.stroke', e)}
					/>					
				</Attribute>
				<Attribute 
					name='X-Axis Width' 
					value={get(theme, 'independentAxis.style.ticks.strokeWidth')}
				>
					<Menu 
						items={['0px', '1px', '2px', '3px', '4px', '5px']}
						selected={get(theme,'independentAxis.style.ticks.strokeWidth')}
						onChange={v => onChangeNumber('independentAxis.style.ticks.strokeWidth',v)} 
					/>				
				</Attribute>
				<Attribute 
					name='X-Axis Label Font' 
					value={get(theme, 'independentAxis.style.tickLabels.fontFamily')}
				>
					<Menu 
						items={['Sans-serif', 'Roboto', 'Times', 'Lato', 'Montserrat']}
						selected={get(theme,'independentAxis.style.tickLabels.fontFamily')}
						onChange={v => onChangeNumber('independentAxis.style.tickLabels.fontFamily',v)} 
					/>				
				</Attribute>		
				<Attribute 
					name='X-Axis Label Font Size' 
					value={get(theme, 'independentAxis.style.tickLabels.fontSize')}
				>
					<Menu 
						items={['0px', '2px', '4px', '6px', '8px', '10px', '12px', '14px']}
						selected={get(theme,'independentAxis.style.tickLabels.fontSize')}
						onChange={v => onChangeNumber('independentAxis.style.tickLabels.fontSize',v)} 
					/>				
				</Attribute>							
				<Attribute 
					name='X-Axis Label Color' 
					value={get(theme, 'independentAxis.style.tickLabels.fill')}
				>
					<ColorPicker 
						value={get(theme,'independentAxis.style.tickLabels.fill')} 
						onChange={e => onChangeColor('independentAxis.style.tickLabels.fill', e)}
					/>				
				</Attribute>	
				<Attribute 
					name='X-Axis Label Padding' 
					value={get(theme, 'independentAxis.style.tickLabels.padding')}
				>
					<Menu 
						items={[0, 2, 4, 6, 8, 10]}
						selected={get(theme,'independentAxis.style.tickLabels.padding')}
						onChange={v => onChangeNumber('independentAxis.style.tickLabels.padding',v)} 
					/>			
				</Attribute>						
				<Attribute 
					name='Y-Axis Color' 
					value={get(theme, 'dependentAxis.style.ticks.stroke')}
				>
					<ColorPicker 
						value={get(theme,'dependentAxis.style.ticks.stroke')} 
						onChange={e => onChangeColor('dependentAxis.style.ticks.stroke', e)}
					/>					
				</Attribute>	
				<Attribute 
					name='Y-Axis Width' 
					value={get(theme, 'dependentAxis.style.ticks.strokeWidth')}
				>
					<Menu 
						items={['0px', '1px', '2px', '3px', '4px', '5px']}
						selected={get(theme,'dependentAxis.style.ticks.strokeWidth')}
						onChange={v => onChangeNumber('dependentAxis.style.ticks.strokeWidth',v)} 
					/>				
				</Attribute>		
				<Attribute 
					name='Y-Axis Label Font' 
					value={get(theme, 'dependentAxis.style.tickLabels.fontFamily')}
				>
					<Menu 
						items={['Sans-serif', 'Roboto', 'Times', 'Lato', 'Montserrat']}
						selected={get(theme,'dependentAxis.style.tickLabels.fontFamily')}
						onChange={v => onChangeNumber('dependentAxis.style.tickLabels.fontFamily',v)} 
					/>				
				</Attribute>		
				<Attribute 
					name='Y-Axis Label Font Size' 
					value={get(theme, 'dependentAxis.style.tickLabels.fontSize')}
				>
					<Menu 
						items={['0px', '2px', '4px', '6px', '8px', '10px', '12px', '14px']}
						selected={get(theme,'dependentAxis.style.tickLabels.fontSize')}
						onChange={v => onChangeNumber('dependentAxis.style.tickLabels.fontSize',v)} 
					/>				
				</Attribute>							
				<Attribute 
					name='Y-Axis Label Color' 
					value={get(theme, 'dependentAxis.style.tickLabels.fill')}
				>
					<ColorPicker 
						value={get(theme,'dependentAxis.style.tickLabels.fill')} 
						onChange={e => onChangeColor('dependentAxis.style.tickLabels.fill', e)}
					/>				
				</Attribute>					
				<Attribute 
					name='Y-Axis Label Padding' 
					value={get(theme, 'dependentAxis.style.tickLabels.padding')}
				>
					<Menu 
						items={[0, 2, 4, 6, 8, 10]}
						selected={get(theme,'dependentAxis.style.tickLabels.padding')}
						onChange={v => onChangeNumber('dependentAxis.style.tickLabels.padding',v)} 
					/>			
				</Attribute>		
			</Dropdown>
		</div>
	)
}

// 					<TwitterPicker triangle="hide" colors={['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7']}/>



		// <div className='theme'>
		// 	<DropDown title='General'>
		// 		<Attribute 
		// 			name='Width'
		// 			value={ _get( theme, 'chart.width' ) }
		// 			onChange={ e => onChange( 'chart.width', e ) }
		// 		/>
		// 		<Attribute 
		// 			name='Height'
		// 			value={ _get( theme, 'chart.height' ) }
		// 			onChange={ e => onChange( 'chart.height', e ) }
		// 		/>
		// 		<Attribute 
		// 			name='Padding'
		// 			value={ _get( theme, 'chart.padding' ) }
		// 			onChange={ e => onChange( 'chart.padding', e ) }
		// 		/>
		// 	</DropDown>
		// 	<DropDown title='Line'>
		// 		<Attribute 
		// 			name='Line (Stroke) Color'
		// 			value={ _get( theme, 'line.style.data.stroke' ) }
		// 			onChange={ e => onChange( 'line.style.data.stroke', e ) }
		// 		/>
		// 		<Attribute 
		// 			name='Line (Stroke) Width'
		// 			value={ _get( theme, 'line.style.data.strokeWidth' ) }
		// 			onChange={ e => onChange( 'line.style.data.strokeWidth', e ) }
		// 		/>
		// 		<Attribute 
		// 			name='Line Opacity'
		// 			value={ _get( theme, 'line.style.data.opacity' ) }
		// 			onChange={ e => onChange( 'line.style.data.opacity', e ) }
		// 		/>
		// 	</DropDown>
		// 	<DropDown title='Axis'>
		// 		<Attribute 
		// 			name='Axis (Stroke) Color'
		// 			value={ _get( theme, 'axis.style.axis.stroke' ) }
		// 			onChange={ e => onChange( 'axis.style.axis.stroke', e ) }
		// 		/>
		// 		<Attribute 
		// 			name='Axis (Stroke) Width'
		// 			value={ _get( theme, 'axis.style.axis.strokeWidth' ) }
		// 			onChange={ e => onChange( 'axis.style.axis.strokeWidth', e ) }
		// 		/>
		// 		<Attribute 
		// 			name='Axis Label Padding'
		// 			value={ _get( theme, 'axis.style.axisLabel.padding' ) }
		// 			onChange={ e => onChange( 'axis.style.axisLabel.padding', e ) }
		// 		/>
		// 	</DropDown>
		// 	<DropDown title='Grid'>
		// 		<Attribute 
		// 			name='Grid (Stroke) Color'
		// 			value={ _get( theme, 'axis.style.grid.stroke' ) }
		// 			onChange={ e => onChange( 'axis.style.grid.stroke', e ) }
		// 		/>
		// 	</DropDown>
		// 	<DropDown title='Tick Marks'>
		// 		<Attribute 
		// 			name='Axis Ticks (Stroke) Color'
		// 			value={ _get( theme, 'axis.style.ticks.stroke' ) }
		// 			onChange={ e => onChange( 'axis.style.ticks.stroke', e ) }
		// 		/>
		// 		<Attribute 
		// 			name='Axis Ticks Width'
		// 			value={ _get( theme, 'axis.style.ticks.strokeWidth' ) }
		// 			onChange={ e => onChange( 'axis.style.ticks.strokeWidth', e ) }
		// 		/>
		// 		<Attribute 
		// 			name='Axis Ticks Length (Size)'
		// 			value={ _get( theme, 'axis.style.ticks.size' ) }
		// 			onChange={ e => onChange( 'axis.style.ticks.size', e ) }
		// 		/>
		// 		<Attribute 
		// 			name='Axis Tick Label Padding'
		// 			value={ _get( theme, 'axis.style.tickLabels.padding' ) }
		// 			onChange={ e => onChange( 'axis.style.tickLabels.padding', e ) }
		// 		/>
		// 		<Attribute 
		// 			name='Axis Tick Label Fill'
		// 			value={ _get( theme, 'axis.style.tickLabels.fill' ) }
		// 			onChange={ e => onChange( 'axis.style.tickLabels.fill', e ) }
		// 		/>
		// 		<Attribute 
		// 			name='Axis Tick Font Size'
		// 			value={ _get( theme, 'axis.style.tickLabels.fontSize' ) }
		// 			onChange={ e => onChange( 'axis.style.tickLabels.fontSize', e ) }
		// 		/>
		// 	</DropDown>
		// </div>

export default Theme
