import React from 'react'
import cn from 'classnames'

import './DataSidebar.css'

function Datum( props ) {
	const { x, y, isOdd } = props
	return (
		<div className={cn('datum',{isOdd})}>
			<div className='x'>{x}</div>
			<div className='y'>{y}</div>
		</div>
	)
}

function DataSidebar( props ) {
	const { data } = props
	console.log( data )
	return (
		<div className='data-sidebar'>
			<h2>Data Editor</h2>
			<div className='datum title'>
				<div className='x'>X</div>
				<div className='y'>Y</div>
			</div>
			{ data.map( (d, i) => <Datum x={d.x} y={d.y} key={d.x} isOdd={i%2===0} /> ).slice( 0, 10 ) }
			{ data.length > 10 && <p>{`... and ${data.length - 10} more items`}</p>}
		</div>
	)
}

export default DataSidebar
