function objectToArray( obj: object | undefined ): any[] {
	if ( obj === undefined ) {
		return [];
	}
	return Object.entries( obj );
}

export default objectToArray;
