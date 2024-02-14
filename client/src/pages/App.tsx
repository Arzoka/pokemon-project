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
  const [keyState, setKeyState] = useState({
    up: false,
    down: false,
    left: false,
    right: false,
  });

  const player = new Player(environment);

  // const xCells = 15;
  // const yCells = 11;
  // const grid = Array.from({length: yCells}, () => Array(xCells).fill({
  //
  // }));
  //
  // console.log(grid);

  useEffect(() => {
    const keyState: {[key: string]: boolean} = {};
    window.addEventListener('keydown', function(e){
      keyState[e.key.toLowerCase()] = true;
    }, true);
    window.addEventListener('keyup', function(e){
      keyState[e.key.toLowerCase()] = false;
    }, true);

    function gameLoop() {
      if (keyState['arrow-left'] || keyState['a']) { player.movePlayer('left') }
      if (keyState['arrow-right'] || keyState['d']){ player.movePlayer('right') }
      if (keyState['arrow-up'] || keyState['w']){ player.movePlayer('up') }
      if (keyState['arrow-left'] || keyState['s']){ player.movePlayer('down') }
      player.isRunning = keyState['shift'];


      setPlayerState({
        x: player.x,
        y: player.y,
        direction: player.direction,
        canEncounter: player.canEncounter,
      });

      setTimeout(gameLoop, player.isRunning ? 100 : 200);
    }

    gameLoop();

    return () => {
      window.removeEventListener('keydown', function(e){
        keyState[e.key.toLowerCase()] = true;
      }, true);
      window.removeEventListener('keyup', function(e){
        keyState[e.key.toLowerCase()] = false;
      }, true);
    }
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
