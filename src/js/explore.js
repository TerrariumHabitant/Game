import {
  DESCRIPTION,
  LOCATION,
  getAllLocations,
  NON_ACTION_KEYS,
  RESULT_TEXT,
} from './definitions/locations';
import { HISTORY } from './definitions/character';
import { prompt, print, clear, wait } from './tools';
import * as MODES from './definitions/modes';

export async function explore(character) {
  // Record that we were here
  character[LOCATION + HISTORY].push(character[LOCATION]);
  // Count the number of times we've been here before (excluding this time)
  const numTimesInThisLocation = character[LOCATION + HISTORY].reduce(
    (reduced, current) => reduced + (current === character[LOCATION] ? 1 : 0),
    -1,
  );

  // TODO: Determine if there's an enemy at this location. If so, switch the mode to fighting!
  const enemyExistsHere = false;
  if (enemyExistsHere) {
    return {
      ...character,
      [MODES.MODE]: MODES.FIGHTING,
    };
  }

  const { [character[LOCATION]]: currentLocation } = getAllLocations(
    character,
    numTimesInThisLocation,
  );
  const availableActions = Object.keys(currentLocation).filter(
    (key) => !NON_ACTION_KEYS.includes(key),
  );

  clear();
  print(
    '◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️',
  );
  print(currentLocation[DESCRIPTION]);
  print('');
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
