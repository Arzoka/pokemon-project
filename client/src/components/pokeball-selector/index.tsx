import { IReceivedPokeball } from '../../@types/CustomPokemonTypes/Pokeballs/IPokeball.ts';
import React, { useContext } from 'react';
import attemptCatch from '../../helpers/pokemon/attemptCatch.ts';
import { IRandomPokemonEncounter } from '../../@types/CustomPokemonTypes/Encounters/RandomEncounter.ts';
import { EnvironmentContext } from '../../contexts/EnvironmentContext.tsx';

interface PokeballSelectorProps {
	pokeballs: IReceivedPokeball[];
	currentPokeball: IReceivedPokeball | null;
	setCurrentPokeball: React.Dispatch<React.SetStateAction<IReceivedPokeball | null>>;
	attemptingCatch: boolean;
	setAttemptingCatch: React.Dispatch<React.SetStateAction<boolean>>;
	encounter: IRandomPokemonEncounter;
}

const PokeballSelector: React.FC<PokeballSelectorProps> = ({
	pokeballs,
	currentPokeball,
	setCurrentPokeball,
	attemptingCatch,
	setAttemptingCatch,
	encounter,
}) => {
	const { setCurrentEncounter } = useContext(EnvironmentContext);

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
			style={ {
				position: 'absolute',
				width: '100%',
				left: 0,
				bottom: 0,
				padding: '1rem',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '0.75rem',
			} }
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
				} }
				>
					Run
				</button>
				<button style={ {
					width: '100px',
					paddingBlock: '0.5em',
				} } onClick={ () => !encounter.caught && attemptCatch(encounter, currentPokeball, setAttemptingCatch, setCurrentEncounter) }>
					Catch
				</button>
			</div>
		</div>
	);
};

export default PokeballSelector;
