import { useEffect, useState } from 'react';
import Player from '../entities/Player.ts';
import PlayerSprite from '../components/player-sprite';
import PokemonGameContainer from '../components/pokemon-game-container';
import getRandomEnvironment from '../helpers/environment/getRandomEnvironment.ts';
import calculateEncounter from '../helpers/environment/algorithms/calculateEncounters.ts';
import PokemonEncounter from './pokemon-encounter.tsx';

function App() {
  const [playerState, setPlayerState] = useState({
    x: 0,
    y: 0,
    direction: 'down',
    canEncounter: false,
  });

  const [environment] = useState(getRandomEnvironment());
  const [currentEncounter, setCurrentEncounter] = useState(false);

  const player = new Player(environment);

  // const xCells = 15;
  // const yCells = 11;
  // const grid = Array.from({length: yCells}, () => Array(xCells).fill({
  //
  // }));
  //
  // console.log(grid);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (currentEncounter) { return }

      if (e.key === 'ArrowUp' || e.key === 'w') {
        player.movePlayer('up');
      }
      if (e.key === 'ArrowDown' || e.key === 's') {
        player.movePlayer('down');
      }
      if (e.key === 'ArrowLeft' || e.key === 'a') {
        player.movePlayer('left');
      }
      if (e.key === 'ArrowRight' || e.key === 'd') {
        player.movePlayer('right');
      }
      setPlayerState({ x: player.x, y: player.y, direction: player.direction, canEncounter: player.canEncounter });
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!playerState.canEncounter || currentEncounter) { return }

    setCurrentEncounter(calculateEncounter);

  }, [playerState]);

  return (
    <>
      <PokemonGameContainer environment={ environment }>
        {currentEncounter ? (
          <PokemonEncounter
          setCurrentEncounter={ setCurrentEncounter }
          />
        ) : (
          <PlayerSprite playerState={ playerState } />
        )}
      </PokemonGameContainer>

    </>
  );

}

export default App;
