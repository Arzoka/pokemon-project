import { IRandomPokemonEncounter } from '../../@types/CustomPokemonTypes/Encounters/RandomEncounter';
import { useState } from 'react';
import { IReceivedPokeball } from '../../@types/CustomPokemonTypes/Pokeballs/IPokeball.ts';
import styles from './pokemon-sprite.module.scss';
import usePokemonSprite from '../../globals/hooks/usePokemonSprite.ts';

const PokemonSprite = ({
	pokemon,
	attemptingCatch,
	pokeball,
}: {
	pokemon: IRandomPokemonEncounter
	attemptingCatch: boolean
	pokeball: IReceivedPokeball | null
}) => {
	const [playingAudio, setPlayingAudio] = useState(false);
	const [playingShinyAudio, setPlayingShinyAudio] = useState(false);

	usePokemonSprite({
		pokemon,
		attemptingCatch,
		setPlayingAudio,
		setPlayingShinyAudio,
	});

	return pokemon.caught ? null : (
		<div className={ styles.PokemonSpriteContainer }>
			{ playingShinyAudio ? (
				<img
					className={ styles.ShinyAnimationSprite }
					style={ {
						translate: `0 ${ playingAudio ? '-5%' : '0' }`,
					} }
					src={ 'resources/pokemon/ShinySparkleAnimation.gif' }
					alt={ 'Shiny sparkle' }
				/>
			) : null }
			{ attemptingCatch && pokeball ? (
				<img
					className={ styles.PokeballSprite }
					style={ {
						translate: `0 ${ playingAudio ? '-5%' : '0' }`,
					} }
					src={ pokeball.sprite }
					alt={ `sprite showing catch attempt on ${ pokemon.name } using ${ pokeball.name }` }
				/>
			) : (
				<img
					className={ styles.PokemonSprite }
					style={ {
						translate: `0 ${ playingAudio ? '-5%' : '0' }`,
					} }
					src={ pokemon.shiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default }
					alt={ pokemon.name }
				/>
			) }
			{ pokemon.held_item && !attemptingCatch ? (
				<img
					className={ styles.HeldItemSprite }
					src={ pokemon.held_item?.sprites?.default }
					alt={ pokemon.held_item.name }
				/>
			) : null }
		</div>
	);
};

export default PokemonSprite;
