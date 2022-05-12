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
import {SHORTCUT_DELIMITER} from "./definitions/actions";
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

  const availableDisplayActions = availableActions.map(displayAction => {
    if (displayAction.indexOf(SHORTCUT_DELIMITER) > 0) {
      return displayAction.replace(SHORTCUT_DELIMITER, " (") + ")"
    }
    return displayAction;
  });

  const availableInputActions = availableActions.reduce((actions, currentAction) => {
    actions.push(...currentAction.split(SHORTCUT_DELIMITER));
    return actions;
  }, []);


  // Ask the user what to do
  print(
    'You may choose what you want to do. Some of your options are: ' + availableActions.join(', '),
  );
  const action = await prompt('What do you want to do?', availableInputActions);

  const actualAction = availableActions.find(availableAction =>
    availableAction.split(SHORTCUT_DELIMITER).indexOf(action) > -1
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
