import styles from './styles.module.scss';
import { FC, useContext, useEffect, useState } from 'react';
import { IRandomPokemonEncounter } from '../../../@types/CustomPokemonTypes/Encounters/RandomEncounter.ts';
import PokemonTypes from './sub-components/PokemonTypes';
import HexagonGraph from './sub-components/HexagonGraph';
import PokemonMoves from './sub-components/PokemonMoves';
import { InventoryContext } from '../../../globals/contexts/InventoryContext.tsx';
import PokemonStats from './sub-components/PokemonStats';

const PokemonInformationModal: FC<{
	pokemon: IRandomPokemonEncounter | undefined
}> = ( { pokemon } ) => {
	const { setViewingPokemon } = useContext( InventoryContext );
	const [playingAudio, setPlayingAudio] = useState( false );
	const [playingShinyAudio, setPlayingShinyAudio] = useState( false );

	useEffect( () => {
		if ( pokemon?.cry ) {
			const audio = new Audio( pokemon?.cry );
			audio.addEventListener( 'ended', () => {
				setPlayingAudio( false );
				if ( pokemon?.shiny ) {
					const shinyAudio = new Audio( 'resources/pokemon/ShinySparkleSound.ogg' );
					shinyAudio.addEventListener( 'ended', () => {
						setPlayingShinyAudio( false );
					} );
					shinyAudio.play()
						.then( () => {
							setPlayingShinyAudio( true );
						}, ( err ) => console.log( 'Error playing audio:', err ) );
				}
			} );
			audio.play()
				.then( () => {
					setPlayingAudio( true );
				}, ( err ) => console.log( 'Error playing audio:', err ) );
		}

	}, [pokemon] );

	return (
		<div onClick={ () => setViewingPokemon( null ) } className={ styles.ModalContainer }>
			<div className={ styles.Modal }>
				<div style={ {
					width: '100%',
					color: 'black',
				} }>
					<h3>{ pokemon?.name }</h3>
					<p>lvl { pokemon?.level }</p>
					<div className={ styles.PokemonSpriteContainer }>
						{ playingShinyAudio ? (
							<img
								className={ styles.ShinyAnimationSprite }
								style={ {
									translate: `0 ${ playingAudio ? '-5%' : '0' }`,
								} }
								src={ 'resources/pokemon/ShinySparkleAnimation.gif' }
								alt={ 'Shiny sparkle' }
							/> ) : null }
						<img
							className={ styles.PokemonSprite }
							style={ {
								translate: `0 ${ playingAudio ? '-5%' : '0' }`,
							} }
							src={ pokemon?.shiny ? pokemon?.sprites.front_shiny : pokemon?.sprites.front_default }
							alt={ pokemon?.name }
						/>
						{ pokemon?.held_item ? (
							<img
								className={ styles.HeldItemSprite }
								src={ pokemon?.held_item?.sprites?.default }
								alt={ pokemon?.held_item.name }
							/> ) : null }
					</div>
					<PokemonTypes types={ pokemon?.types } />
					<div style={ {
						height: 200,
						width: 200,
					} }>
						<HexagonGraph EVs={ pokemon?.evs } IVs={ pokemon?.ivs } />
					</div>
				</div>
				<div style={ {
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
					gap: '1em',
				} }>
					<PokemonMoves receivedmoves={ pokemon?.moves } />
					<PokemonStats stats={ pokemon?.stats } />
				</div>
			</div>
		</div> );
};

export default PokemonInformationModal;
