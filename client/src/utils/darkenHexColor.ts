function darkenHexColor( hex: string, percent: number ): string {
	const hexNumber = parseInt( hex, 16 );
	const red = ( hexNumber >> 16 ) * ( 1 - percent );
	const green = ( ( hexNumber >> 8 ) & 0xff ) * ( 1 - percent );
	const blue = ( hexNumber & 0xff ) * ( 1 - percent );
	return `#${ Math.round( red ) << 16 | Math.round( green ) << 8 | Math.round( blue ) }`;
}
