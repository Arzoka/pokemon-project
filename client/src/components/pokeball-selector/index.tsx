import { IReceivedPokeball } from '../../@types/CustomPokemonTypes/Pokeballs/IPokeball.ts';
import React, { useContext } from 'react';
import attemptCatch from '../../utils/pokemon/attemptCatch.ts';
import { EnvironmentContext } from '../../globals/contexts/EnvironmentContext.tsx';
import styles from './pokeball-selector.module.scss';
import { EncounterContext } from '../../globals/contexts/EncounterContext.tsx';

interface PokeballSelectorProps {
	pokeballs: IReceivedPokeball[];
	currentPokeball: IReceivedPokeball | null;
	setCurrentPokeball: React.Dispatch<React.SetStateAction<IReceivedPokeball | null>>;
}

const PokeballSelector: React.FC<PokeballSelectorProps> = ({
	pokeballs,
	currentPokeball,
	setCurrentPokeball,
}) => {
	const {
		setCurrentEncounter,
		setMusic,
	} = useContext(EnvironmentContext);

	const {
		Encounter,
		attemptingCatch,
		setAttemptingCatch,
	} = useContext(EncounterContext);

	function handlePokeballChange(direction: string) {
		if (!currentPokeball) {
			return;
		}

		const currentIndex = pokeballs.indexOf(currentPokeball);

		if (direction === 'left') {
			if (currentIndex === 0) {
				setCurrentPokeball(pokeballs[pokeballs.length - 1]);
			} else {
				setCurrentPokeball(pokeballs[currentIndex - 1]);
			}
		}

		if (direction === 'right') {
			if (currentIndex === pokeballs.length - 1) {
				setCurrentPokeball(pokeballs[0]);
			} else {
				setCurrentPokeball(pokeballs[currentIndex + 1]);
			}
		}
	}

	if (!currentPokeball || attemptingCatch) {
		return null;
	}

	return (
		<div
			className={ styles.PokeballSelectorContainer }
		>
			<div style={ {
				width: '100%',
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
			} }>
				<button onClick={ () => handlePokeballChange('left') } style={ {
					width: '100px',
					paddingBlock: '0.5em',
				} }>
					Previous
				</button>
				{ currentPokeball ? (
					<div style={ {
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						textAlign: 'center',
					} }
					>
						<p style={ {
							fontWeight: 'bold',
						} }>
							{ currentPokeball.name }
						</p>
						<img
							src={ currentPokeball.sprite }
							alt={ currentPokeball.name + ' sprite' }
						/>
						<p style={ {
							maxWidth: '55%',
							wordWrap: 'break-word',
						} }
						>
							{ currentPokeball.description }
						</p>
					</div>
				) : null }
				<button onClick={ () => handlePokeballChange('right') } style={ {
					width: '100px',
					paddingBlock: '0.5em',
				} }>
					Next
				</button>
			</div>
			<div style={ {
				display: 'flex',
				flexDirection: 'row',
				gap: '1em',
			} }>
				<button style={ {
					width: '100px',
					paddingBlock: '0.5em',
				} } onClick={ () => {
					setCurrentEncounter(false);
					setMusic('Route1Music');
				} }
				>
					Run
				</button>
				<button style={ {
					width: '100px',
					paddingBlock: '0.5em',
				} } onClick={ () => !Encounter?.caught && attemptCatch(Encounter, currentPokeball, setAttemptingCatch, setCurrentEncounter) }>
					Catch
				</button>
			</div>
		</div>
	);
};

export default PokeballSelector;
