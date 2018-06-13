import React from 'react'
import { get } from '../utils'

import Dropdown from '../container/Dropdown.jsx'
import Attribute from '../container/Attribute.jsx'
import ColorPicker from './ColorPicker.jsx'
import Menu from './Menu.jsx'
import './Theme.css'

function ColorAttribute( props ) {
	const { name, accessor, theme, changeTheme } = props
	return (
		<Attribute 
			name={name}
			value={get( theme, accessor )}
		>
			<ColorPicker
				value={get( theme, accessor )}
				onChange={color => changeTheme( accessor, color )}
			/>
		</Attribute>
	)
}

function MenuAttribute( props ) {
	const { name, accessor, theme, changeTheme } = props
	return (
		<div/>
	)
}

const interpolationTypes = [
	"basis",
	"cardinal",
	"catmullRom",
	"linear",
	"monotoneX",
	"monotoneY",
	"natural",
	"step",
	"stepAfter",
	"stepBefore"
]

function Theme( props ) {

	const { theme, changeTheme, changeWidth, changeHeight, interpolation, changeInterpolation, backgroundColor, changeBackground } = props

	function getGridStyle( theme, field ) {
		const val = get( theme, field )
		if ( val === '10, 5' ) return 'Dashed'
		return 'Solid'
	}

	function setGridStyle( val, field ) {
		if ( val === 'Dashed' ) changeTheme( field, '10, 5' )
		else changeTheme( field, 'None' )
	}

	return (
		<div className='theme'>
			<div className='title'>
				<h2>Theme Design</h2>
			</div>
			<Dropdown title='Size and Padding'>
				<Attribute
					name='Width'
					value={get(theme, 'chart.width')}
				>
					<Menu 
						items={[200, 300, 400, 500, 600, 700, 800]}
						selected={get(theme, 'chart.width')}
						onChange={e => {changeTheme('chart.width', e); changeWidth(e)}}
					/>
				</Attribute>	
				<Attribute
					name='Height'
					value={get(theme, 'chart.height')}
				>
					<Menu 
						items={[200, 300, 400, 500, 600, 700, 800]}
						selected={get(theme, 'chart.height')}
						onChange={e => {changeTheme('chart.height', e); changeHeight(e)}}
					/>
				</Attribute>					
				<Attribute
					name='Padding (Left)'
					value={get(theme, 'chart.padding.left')}
				>
					<Menu 
						items={[0, 10, 20, 30, 40, 50, 60]}
						selected={get(theme, 'chart.padding.left')}
						onChange={e => changeTheme('chart.padding.left', e)}
					/>
				</Attribute>			
				<Attribute
					name='Padding (Top)'
					value={get(theme, 'chart.padding.top')}
				>
					<Menu 
						items={[0, 10, 20, 30, 40, 50, 60]}
						selected={get(theme, 'chart.padding.top')}
						onChange={e => changeTheme('chart.padding.top', e)}
					/>
				</Attribute>		
				<Attribute
					name='Padding (Right)'
					value={get(theme, 'chart.padding.right')}
				>
					<Menu 
						items={[0, 10, 20, 30, 40, 50, 60]}
						selected={get(theme, 'chart.padding.right')}
						onChange={e => changeTheme('chart.padding.right', e)}
					/>
				</Attribute>	
				<Attribute
					name='Padding (Bottom)'
					value={get(theme, 'chart.padding.bottom')}
				>
					<Menu 
						items={[0, 10, 20, 30, 40, 50, 60]}
						selected={get(theme, 'chart.padding.bottom')}
						onChange={e => changeTheme('chart.padding.bottom', e)}
					/>
				</Attribute>
			</Dropdown>
			<Dropdown title='Background and Grid'>	
				<Attribute 
					name='Background Color'
					value={backgroundColor}
				>
					<ColorPicker
						value={backgroundColor}
						onChange={changeBackground}
					/>
				</Attribute>																							
				<ColorAttribute
					name='Horizontal Grid Color'
					accessor='dependentAxis.style.grid.stroke'
					theme={theme}
					changeTheme={changeTheme}
				/>			
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
				<ColorAttribute
					name='Vertical Grid Color'
					accessor='independentAxis.style.grid.stroke'
					theme={theme}
					changeTheme={changeTheme}
				/>									
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
					name='Interpolation'
					value={interpolation}
				>
					<Menu 
						items={interpolationTypes}
						selected={interpolation}
						onChange={e => changeInterpolation(e)}
					/>
				</Attribute>				
				<ColorAttribute
					name='Line Color'
					accessor='area.style.data.stroke'
					theme={theme}
					changeTheme={changeTheme}
				/>
				<Attribute 
					name='Line Width' 
					value={get(theme,'area.style.data.strokeWidth')}
				>
					<Menu 
						items={['0px', '1px', '2px', '3px', '4px', '5px']}
						selected={get(theme,'area.style.data.strokeWidth')}
						onChange={v => changeTheme('area.style.data.strokeWidth',v)} 
					/>
				</Attribute>
				<ColorAttribute
					name='Dot Color'
					accessor='scatter.style.data.fill'
					theme={theme}
					changeTheme={changeTheme}
				/>	
				<Attribute 
					name='Dot Size' 
					value={get(theme,'scatter.style.data.size')}
				>
					<Menu 
						items={[1, 2, 3, 4, 5]}
						selected={get(theme,'scatter.style.data.size')}
						onChange={v => changeTheme('scatter.style.data.size',v)} 
					/>
				</Attribute>					
				<ColorAttribute
					name='Dot Outline Color'
					accessor='scatter.style.data.stroke'
					theme={theme}
					changeTheme={changeTheme}
				/>													
				<Attribute 
					name='Dot Outline Size' 
					value={get(theme,'scatter.style.data.strokeWidth')}
				>
					<Menu 
						items={['0px', '1px', '2px', '3px', '4px', '5px']}
						selected={get(theme,'scatter.style.data.strokeWidth')}
						onChange={v => changeTheme('scatter.style.data.strokeWidth',v)} 
					/>
				</Attribute>				
				<ColorAttribute
					name='Fill'
					accessor='area.style.data.fill'
					theme={theme}
					changeTheme={changeTheme}
				/>						
				<Attribute 
					name='Fill Opacity' 
					value={get(theme,'area.style.data.fillOpacity')}
				>
					<Menu 
						items={[0, 0.2, 0.4, 0.6, 0.8, 1]}
						selected={get(theme,'area.style.data.fillOpacity')}
						onChange={v => changeTheme('area.style.data.fillOpacity',v)} 
					/>
				</Attribute>								
			</Dropdown>
			<Dropdown title='Axis'>
				<ColorAttribute
					name='X-Axis Color'
					accessor='independentAxis.style.axis.stroke'
					theme={theme}
					changeTheme={changeTheme}
				/>	
				<Attribute 
					name='X-Axis Width' 
					value={get(theme, 'independentAxis.style.axis.strokeWidth')}
				>
					<Menu 
						items={['0px', '1px', '2px', '3px', '4px', '5px']}
						selected={get(theme,'independentAxis.style.axis.strokeWidth')}
						onChange={v => changeTheme('independentAxis.style.axis.strokeWidth',v)} 
					/>				
				</Attribute>
				<ColorAttribute
					name='Y-Axis Color'
					accessor='dependentAxis.style.axis.stroke'
					theme={theme}
					changeTheme={changeTheme}
				/>					
				<Attribute 
					name='Y-Axis Width' 
					value={get(theme, 'dependentAxis.style.axis.strokeWidth')}
				>
					<Menu 
						items={['0px', '1px', '2px', '3px', '4px', '5px']}
						selected={get(theme,'dependentAxis.style.axis.strokeWidth')}
						onChange={v => changeTheme('dependentAxis.style.axis.strokeWidth',v)} 
					/>				
				</Attribute>			
			</Dropdown>
			<Dropdown title='X-Axis Tick Marks'>
				<ColorAttribute
					name='Tick Color'
					accessor='independentAxis.style.ticks.stroke'
					theme={theme}
					changeTheme={changeTheme}
				/>								
				<Attribute 
					name='Tick Width' 
					value={get(theme, 'independentAxis.style.ticks.strokeWidth')}
				>
					<Menu 
						items={['0px', '1px', '2px', '3px', '4px', '5px']}
						selected={get(theme,'independentAxis.style.ticks.strokeWidth')}
						onChange={v => changeTheme('independentAxis.style.ticks.strokeWidth',v)} 
					/>				
				</Attribute>
				<Attribute 
					name='Tick Label Font' 
					value={get(theme, 'independentAxis.style.tickLabels.fontFamily')}
				>
					<Menu 
						items={['Sans-serif', 'Roboto', 'Times', 'Lato', 'Montserrat']}
						selected={get(theme,'independentAxis.style.tickLabels.fontFamily')}
						onChange={v => changeTheme('independentAxis.style.tickLabels.fontFamily',v)} 
					/>				
				</Attribute>		
				<Attribute 
					name='Tick Label Font Size' 
					value={get(theme, 'independentAxis.style.tickLabels.fontSize')}
				>
					<Menu 
						items={['0px', '2px', '4px', '6px', '8px', '10px', '12px', '14px']}
						selected={get(theme,'independentAxis.style.tickLabels.fontSize')}
						onChange={v => changeTheme('independentAxis.style.tickLabels.fontSize',v)} 
					/>				
				</Attribute>	
				<ColorAttribute
					name='Tick Label Color'
					accessor='independentAxis.style.tickLabels.fill'
					theme={theme}
					changeTheme={changeTheme}
				/>											
				<Attribute 
					name='Tick Label Padding' 
					value={get(theme, 'independentAxis.style.tickLabels.padding')}
				>
					<Menu 
						items={[0, 2, 4, 6, 8, 10]}
						selected={get(theme,'independentAxis.style.tickLabels.padding')}
						onChange={v => changeTheme('independentAxis.style.tickLabels.padding',v)} 
					/>			
				</Attribute>	
			</Dropdown>
			<Dropdown title='Y-Axis Tick Marks'>
				<ColorAttribute
					name='Tick Color'
					accessor='dependentAxis.style.ticks.stroke'
					theme={theme}
					changeTheme={changeTheme}
				/>										
				<Attribute 
					name='Tick Width' 
					value={get(theme, 'dependentAxis.style.ticks.strokeWidth')}
				>
					<Menu 
						items={['0px', '1px', '2px', '3px', '4px', '5px']}
						selected={get(theme,'dependentAxis.style.ticks.strokeWidth')}
						onChange={v => changeTheme('dependentAxis.style.ticks.strokeWidth',v)} 
					/>				
				</Attribute>		
				<Attribute 
					name='Tick Label Font' 
					value={get(theme, 'dependentAxis.style.tickLabels.fontFamily')}
				>
					<Menu 
						items={['Sans-serif', 'Roboto', 'Times', 'Lato', 'Montserrat']}
						selected={get(theme,'dependentAxis.style.tickLabels.fontFamily')}
						onChange={v => changeTheme('dependentAxis.style.tickLabels.fontFamily',v)} 
					/>				
				</Attribute>		
				<Attribute 
					name='Tick Label Font Size' 
					value={get(theme, 'dependentAxis.style.tickLabels.fontSize')}
				>
					<Menu 
						items={['0px', '2px', '4px', '6px', '8px', '10px', '12px', '14px']}
						selected={get(theme,'dependentAxis.style.tickLabels.fontSize')}
						onChange={v => changeTheme('dependentAxis.style.tickLabels.fontSize',v)} 
					/>				
				</Attribute>	
				<ColorAttribute
					name='Tick Label Color'
					accessor='dependentAxis.style.tickLabels.fill'
					theme={theme}
					changeTheme={changeTheme}
				/>																
				<Attribute 
					name='Tick Label Padding' 
					value={get(theme, 'dependentAxis.style.tickLabels.padding')}
				>
					<Menu 
						items={[0, 2, 4, 6, 8, 10]}
						selected={get(theme,'dependentAxis.style.tickLabels.padding')}
						onChange={v => changeTheme('dependentAxis.style.tickLabels.padding',v)} 
					/>			
				</Attribute>		
			</Dropdown>
		</div>
	)
}

export default Theme
