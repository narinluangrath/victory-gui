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

	function getGridStyle( theme, field ) {
		const val = get( theme, field )
		if ( val === '10, 5' ) return 'Dashed'
		return 'Solid'
	}

	function setGridStyle( val, field ) {
		if ( val === 'Dashed' ) onChangeNumber( field, '10, 5' )
		else onChangeNumber( field, 'None' )
	}

	return (
		<div className='theme'>
			<div className='title'>
				<h2>Theme Design</h2>
			</div>
			<Dropdown title='General'>
				<Attribute
					name='Width'
					value={get(theme, 'chart.width')}
				>
					<Menu 
						items={[200, 300, 400, 500, 600, 700, 800]}
						selected={get(theme, 'chart.width')}
						onChange={e => onChangeNumber('chart.width', e)}
					/>
				</Attribute>	
				<Attribute
					name='Height'
					value={get(theme, 'chart.height')}
				>
					<Menu 
						items={[200, 300, 400, 500, 600, 700, 800]}
						selected={get(theme, 'chart.height')}
						onChange={e => onChangeNumber('chart.height', e)}
					/>
				</Attribute>					
				<Attribute
					name='Padding (Left)'
					value={get(theme, 'chart.padding.left')}
				>
					<Menu 
						items={[0, 10, 20, 30, 40, 50, 60]}
						selected={get(theme, 'chart.padding.left')}
						onChange={e => onChangeNumber('chart.padding.left', e)}
					/>
				</Attribute>			
				<Attribute
					name='Padding (Top)'
					value={get(theme, 'chart.padding.top')}
				>
					<Menu 
						items={[0, 10, 20, 30, 40, 50, 60]}
						selected={get(theme, 'chart.padding.top')}
						onChange={e => onChangeNumber('chart.padding.top', e)}
					/>
				</Attribute>		
				<Attribute
					name='Padding (Right)'
					value={get(theme, 'chart.padding.right')}
				>
					<Menu 
						items={[0, 10, 20, 30, 40, 50, 60]}
						selected={get(theme, 'chart.padding.right')}
						onChange={e => onChangeNumber('chart.padding.right', e)}
					/>
				</Attribute>	
				<Attribute
					name='Padding (Bottom)'
					value={get(theme, 'chart.padding.bottom')}
				>
					<Menu 
						items={[0, 10, 20, 30, 40, 50, 60]}
						selected={get(theme, 'chart.padding.bottom')}
						onChange={e => onChangeNumber('chart.padding.bottom', e)}
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
					value={get(theme,'area.style.data.stroke')}
				>
					<ColorPicker 
						value={get(theme,'area.style.data.stroke')} 
						onChange={e => onChangeColor('area.style.data.stroke', e)}
					/>
				</Attribute>
				<Attribute 
					name='Width' 
					value={get(theme,'area.style.data.strokeWidth')}
				>
					<Menu 
						items={['0px', '1px', '2px', '3px', '4px', '5px']}
						selected={get(theme,'area.style.data.strokeWidth')}
						onChange={v => onChangeNumber('area.style.data.strokeWidth',v)} 
					/>
				</Attribute>
				<Attribute 
					name='Fill' 
					value={get(theme,'area.style.data.fill')}
				>
					<ColorPicker 
						value={get(theme,'area.style.data.fill')} 
						onChange={e => onChangeColor('area.style.data.fill', e)}
					/>
				</Attribute>		
				<Attribute 
					name='Fill Opacity' 
					value={get(theme,'area.style.data.fillOpacity')}
				>
					<Menu 
						items={[0, 0.2, 0.4, 0.6, 0.8, 1]}
						selected={get(theme,'area.style.data.fillOpacity')}
						onChange={v => onChangeNumber('area.style.data.fillOpacity',v)} 
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

export default Theme
