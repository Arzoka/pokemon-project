import { FC } from 'react';
import getTypeColor from '../../../../../utils/pokemon/getTypeColor.ts';

const PokemonTypes: FC<{
	types: string[] | undefined
}> = ( { types } ) => (
	<div style={ {
		display: 'flex',
		flexDirection: 'row',
		gap: '0.25em',
	} }>
		{ types ? types.map( type => (
			<p key={ type } style={ {
				background: getTypeColor( type ),
				paddingBlock: 2,
				paddingInline: 10,
				width: 100,
				textAlign: 'center',
				borderRadius: 15,
			} }>
				{ type }
			</p> ) ) : null }
	</div> );

export default PokemonTypes;
