import {
  DESCRIPTION,
  LOCATION,
  getAllLocations,
  NON_ACTION_KEYS,
  RESULT_TEXT,
} from './definitions/locations';
import { HISTORY } from './definitions/character';
import { prompt, print, clear, wait, randomSelection } from './tools';
import * as MODES from './definitions/modes';
import * as divider from './artwork/divider';

export async function explore(character) {
  // Record that we were here
  character[LOCATION + HISTORY].push(character[LOCATION]);

  const { [character[LOCATION]]: currentLocation } = getAllLocations(character);
  const availableActions = Object.keys(currentLocation).filter(
    (key) => !NON_ACTION_KEYS.includes(key),
  );

  clear();
  print(randomSelection(divider.artwork));
  print(currentLocation[DESCRIPTION]);
  print('');

  // TODO: Determine if there's an enemy at this location. If so, switch the mode to fighting!
  const enemyExistsHere = false;
  if (enemyExistsHere) {
    return {
      ...character,
      [MODES.MODE]: MODES.FIGHTING,
    };
  }

  print('Your options are: ' + availableActions.join(', '));
  const action = await prompt('What do you want to do?', availableActions);

  if (currentLocation[action][RESULT_TEXT]) {
    print(currentLocation[action][RESULT_TEXT]);
    await wait(2000);
  }

  // Update character's location and return
  return {
    ...character,
    ...currentLocation[action],
  };
}
