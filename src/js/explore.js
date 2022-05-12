import {
  DESCRIPTION,
  LOCATION,
  getAllLocations,
  NON_ACTION_KEYS,
  RESULT_TEXT,
} from './definitions/locations';
import { HISTORY } from './definitions/character';
import { prompt, print, clear, wait, saveCharacter } from './tools'; // randomSelection
import * as MODES from './definitions/modes';
// import * as divider from './artwork/divider';

export async function explore(character) {
  // Record that we were here
  character[LOCATION + HISTORY].push(character[LOCATION]);
  saveCharacter(character);

  const { [character[LOCATION]]: currentLocation } = getAllLocations(character);
  const availableActions = Object.keys(currentLocation).filter(
    (key) => !NON_ACTION_KEYS.includes(key),
  );

  // Print the description of this location
  clear();
  // print(randomSelection(divider.artwork));
  print(currentLocation[DESCRIPTION]);
  print('');

  // TODO: Determine if there's an enemy at this location. If so, switch the mode to fighting!
  // Enemy? location, level(number of enemies defeated)
  const enemyExistsHere = false;
  if (enemyExistsHere) {
    return {
      ...character,
      [MODES.MODE]: MODES.FIGHTING,
    };
  }

  // Ask the user what to do
  print(
    'You may choose what you want to do. Some of your options are: ' + availableActions.join(', '),
  );
  const action = await prompt('What do you want to do?', availableActions);

  // If this action has a result text, then print it
  if (currentLocation[action][RESULT_TEXT]) {
    print(currentLocation[action][RESULT_TEXT]);
    await wait(currentLocation[action][RESULT_TEXT].length * 75);
  }

  // Update character's location and return
  return {
    ...character,
    ...currentLocation[action],
  };
}
