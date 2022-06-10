// Imports from other files used in explore code
import {
  CAVE,
  DESCRIPTION,
  LOCATION,
  getAllLocations,
  NON_ACTION_KEYS,
  RESULT_TEXT,
  getNumTimesInCurrentLocation,
} from './definitions/locations';
import { HISTORY } from './definitions/character';
import { prompt, print, clear, wait, saveCharacter, randomInt } from './tools';
import * as MODES from './definitions/modes';
import { SHORTCUT_DELIMITER } from './definitions/actions';

// Not Currently being used
// import { random } from 'colors';
// import * as divider from './artwork/divider';

// save character
export async function explore(character) {
  // Record that we were here
  character[LOCATION + HISTORY].push(character[LOCATION]);
  saveCharacter(character);

  // if enemy and character location are equal, emeny can exist
  const { [character[LOCATION]]: currentLocation } = getAllLocations(character);
  const availableActions = Object.keys(currentLocation).filter(
    (key) => !NON_ACTION_KEYS.includes(key),
  );

  // Print the description of this location
  clear();
  // print(randomSelection(divider.artwork));
  print(currentLocation[DESCRIPTION]);
  print('');

  // Test location for enemy
  const thisIsMyFirstTimeInTheCave =
    character[LOCATION] === CAVE && getNumTimesInCurrentLocation(character) === 0;
  const enemyExistsHere = randomInt(1, 3);
  if (!thisIsMyFirstTimeInTheCave && enemyExistsHere === 2 && !character.justHadAFight) {
    return {
      ...character,
      [MODES.MODE]: MODES.FIGHTING,
    };
  }

  character.justHadAFight = false;

  // This code is not working
  // const availableDisplayActions = availableActions.map((displayAction) => {
  //   if (displayAction.indexOf(SHORTCUT_DELIMITER) > 0) {
  //     return displayAction.replace(SHORTCUT_DELIMITER, ' (') + ')';
  //   }
  //   return displayAction;
  // });

  const availableInputActions = availableActions.reduce((actions, currentAction) => {
    actions.push(...currentAction.split(SHORTCUT_DELIMITER));
    return actions;
  }, []);

  // Ask the user what to do
  print(
    'You may choose what you want to do. Some of your options are: ' + availableActions.join(', '),
  );
  const action = await prompt('What do you want to do?', availableInputActions);

  const actualAction = availableActions.find(
    (availableAction) => availableAction.split(SHORTCUT_DELIMITER).indexOf(action) > -1,
  );

  // If this action has a result text, then print it
  if (currentLocation[actualAction][RESULT_TEXT]) {
    print(currentLocation[actualAction][RESULT_TEXT]);
    await wait(currentLocation[actualAction][RESULT_TEXT].length * 75);
  }

  // Update character's location and return
  return {
    ...character,
    ...currentLocation[actualAction],
  };
}
