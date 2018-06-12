export default function get( obj, keys, modify ) {
	try {
		let pointer = obj
		const keysArr = keys.split( '.' )
		let val = undefined
		keysArr.forEach( ( key, i ) => {
			if ( i === keysArr.length - 1 ) {
				val = modify == null ? 
						  pointer[ key ] : 
						  modify( pointer[ key ] )
			} else {
				if ( pointer[ key ] == null ) {
					throw Error( `key ${key} does not exist` )
				}
				pointer = pointer[ key ]
			}
		})
		return val
	} catch ( e ) {
		console.error( 'err with get util', e )
	}
}