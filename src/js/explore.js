import { DESCRIPTION, LOCATION, getAllLocations } from './definitions/locations';
import { HISTORY } from './definitions/character';
import { ALL_ACTIONS } from './definitions/actions';
import { prompt, print, clear } from './tools';

export async function explore(character) {
  // Record that we were here
  character[LOCATION + HISTORY].push(character[LOCATION]);
  // Count the number of times we've been here before (excluding this time)
  const numTimesInThisLocation = character[LOCATION + HISTORY].reduce(
    (reduced, current) => reduced + (current === character[LOCATION] ? 1 : 0),
    -1,
  );

  const { [character[LOCATION]]: currentLocation } = getAllLocations(
    character,
    numTimesInThisLocation,
  );
  const availableActions = Object.keys(currentLocation).filter((key) => ALL_ACTIONS.includes(key));

  clear();
  print(
    '◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️',
  );
  print(currentLocation[DESCRIPTION]);
  print('');
  print('Your options are: ' + availableActions.join(', '));
  const action = await prompt('What do you want to do?', availableActions);

  character = {
    ...character,
    ...currentLocation[action],
  };

  return character;
}
