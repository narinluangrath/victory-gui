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
	const { name, items, accessor, theme, changeTheme, append, cb } = props
	return (
		<Attribute
			name={name}
			value={get(theme, accessor) + (append || '')}
		>
			<Menu 
				items={items}
				append={append}
				selected={get(theme, accessor)}
				onChange={e => {changeTheme(accessor, e); cb && cb(e)}}
			/>
		</Attribute>	
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
				<MenuAttribute
					name='Width'
					items={[200, 300, 400, 500, 600, 700, 800]}
					accessor='chart.width' 
					theme={theme} 
					changeTheme={changeTheme} 
					append='px'
					cb={changeWidth}
				/>
				<MenuAttribute
					name='Height'
					items={[200, 300, 400, 500, 600, 700, 800]}
					accessor='chart.height' 
					theme={theme} 
					changeTheme={changeTheme} 
					append='px'
					cb={changeHeight}
				/>	
				<MenuAttribute
					name='Padding (Top)'
					items={[0, 10, 20, 30, 40, 50, 60]}
					accessor='chart.padding.top' 
					theme={theme} 
					changeTheme={changeTheme} 
					append='px'
				/>			
				<MenuAttribute
					name='Padding (Left)'
					items={[0, 10, 20, 30, 40, 50, 60]}
					accessor='chart.padding.left' 
					theme={theme} 
					changeTheme={changeTheme} 
					append='px'
				/>		
				<MenuAttribute
					name='Padding (Right)'
					items={[0, 10, 20, 30, 40, 50, 60]}
					accessor='chart.padding.right' 
					theme={theme} 
					changeTheme={changeTheme} 
					append='px'
				/>	
				<MenuAttribute
					name='Padding (Buttom)'
					items={[0, 10, 20, 30, 40, 50, 60]}
					accessor='chart.padding.bottom' 
					theme={theme} 
					changeTheme={changeTheme} 
					append='px'
				/>			
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
				<MenuAttribute
					name='Line Width' 
					items={['0px', '1px', '2px', '3px', '4px', '5px']}
					accessor='area.style.data.strokeWidth' 
					theme={theme} 
					changeTheme={changeTheme} 
				/>						
				<ColorAttribute
					name='Fill (Under Line)'
					accessor='area.style.data.fill'
					theme={theme}
					changeTheme={changeTheme}
				/>			
				<MenuAttribute
					name='Fill (Under Line) Opacity'  
					items={[0, 0.2, 0.4, 0.6, 0.8, 1]}
					accessor='area.style.data.fillOpacity' 
					theme={theme} 
					changeTheme={changeTheme} 
				/>																		
				<ColorAttribute
					name='Dot Color'
					accessor='scatter.style.data.fill'
					theme={theme}
					changeTheme={changeTheme}
				/>	
				<Attribute 
					name='Dot Size' 
					value={get(theme,'scatter.style.data.size') + 'px'}
				>
					<Menu 
						items={[1, 2, 3, 4, 5]}
						append='px'
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
				<MenuAttribute
					name='Dot Outline Size' 
					items={['0px', '1px', '2px', '3px', '4px', '5px']}
					accessor='scatter.style.data.strokeWidth' 
					theme={theme} 
					changeTheme={changeTheme} 
				/>															
			</Dropdown>
			<Dropdown title='Axis'>
				<ColorAttribute
					name='X-Axis Color'
					accessor='independentAxis.style.axis.stroke'
					theme={theme}
					changeTheme={changeTheme}
				/>	
				<MenuAttribute
					name='X-Axis Width' 
					items={['0px', '1px', '2px', '3px', '4px', '5px']}
					accessor='independentAxis.style.axis.strokeWidth' 
					theme={theme} 
					changeTheme={changeTheme} 
				/>					
				<ColorAttribute
					name='Y-Axis Color'
					accessor='dependentAxis.style.axis.stroke'
					theme={theme}
					changeTheme={changeTheme}
				/>			
				<MenuAttribute
					name='Y-Axis Width' 
					items={['0px', '1px', '2px', '3px', '4px', '5px']}
					accessor='dependentAxis.style.axis.strokeWidth' 
					theme={theme} 
					changeTheme={changeTheme} 
				/>										
			</Dropdown>
			<Dropdown title='X-Axis Tick Marks'>
				<ColorAttribute
					name='Tick Color'
					accessor='independentAxis.style.ticks.stroke'
					theme={theme}
					changeTheme={changeTheme}
				/>
				<MenuAttribute
					name='Tick Width' 
					items={['0px', '1px', '2px', '3px', '4px', '5px']}
					accessor='independentAxis.style.ticks.strokeWidth' 
					theme={theme} 
					changeTheme={changeTheme} 
				/>	
				<MenuAttribute
					name='Tick Label Font' 
					items={['Sans-serif', 'Roboto', 'Times', 'Lato', 'Montserrat']}
					accessor='independentAxis.style.tickLabels.fontFamily' 
					theme={theme} 
					changeTheme={changeTheme} 
				/>						
				<MenuAttribute
					name='Tick Label Font Size' 
					items={['0px', '2px', '4px', '6px', '8px', '10px', '12px', '14px']}
					accessor='independentAxis.style.tickLabels.fontSize' 
					theme={theme} 
					changeTheme={changeTheme} 
				/>						
				<ColorAttribute
					name='Tick Label Color'
					accessor='independentAxis.style.tickLabels.fill'
					theme={theme}
					changeTheme={changeTheme}
				/>											
				<MenuAttribute
					name='Tick Label Font Size' 
					items={[0, 2, 4, 6, 8, 10]}
					accessor='independentAxis.style.tickLabels.padding' 
					append='px'
					theme={theme} 
					changeTheme={changeTheme} 
				/>	
			</Dropdown>
			<Dropdown title='Y-Axis Tick Marks'>
				<ColorAttribute
					name='Tick Color'
					accessor='dependentAxis.style.ticks.stroke'
					theme={theme}
					changeTheme={changeTheme}
				/>
				<MenuAttribute
					name='Tick Width' 
					items={['0px', '1px', '2px', '3px', '4px', '5px']}
					accessor='dependentAxis.style.ticks.strokeWidth' 
					theme={theme} 
					changeTheme={changeTheme} 
				/>	
				<MenuAttribute
					name='Tick Label Font' 
					items={['Sans-serif', 'Roboto', 'Times', 'Lato', 'Montserrat']}
					accessor='dependentAxis.style.tickLabels.fontFamily' 
					theme={theme} 
					changeTheme={changeTheme} 
				/>						
				<MenuAttribute
					name='Tick Label Font Size' 
					items={['0px', '2px', '4px', '6px', '8px', '10px', '12px', '14px']}
					accessor='dependentAxis.style.tickLabels.fontSize' 
					theme={theme} 
					changeTheme={changeTheme} 
				/>						
				<ColorAttribute
					name='Tick Label Color'
					accessor='dependentAxis.style.tickLabels.fill'
					theme={theme}
					changeTheme={changeTheme}
				/>											
				<MenuAttribute
					name='Tick Label Font Size' 
					items={[0, 2, 4, 6, 8, 10]}
					accessor='dependentAxis.style.tickLabels.padding' 
					append='px'
					theme={theme} 
					changeTheme={changeTheme} 
				/>	
			</Dropdown>
		</div>
	)
}

export default Theme
