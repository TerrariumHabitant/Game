// Global varibles and imports from other files of the code
import * as MODES from './modes';
import * as LOCATIONS from './locations';
import colors from 'colors';

export const NAME = 'name';
export const COLOR = 'color';
export const CHARACTER = 'character';

// Add colour to text
export const BLUE = { [NAME]: 'BlueGuy', [COLOR]: colors.brightBlue };
export const RED = { [NAME]: 'RedGuy', [COLOR]: colors.brightRed };
export const GREEN = { [NAME]: 'GreenGuy', [COLOR]: colors.brightGreen };
export const PURPLE = { [NAME]: 'PurpleGuy', [COLOR]: colors.magenta };

export const HISTORY = 'history';

// Create Character
export function createCharacter(name, location, character) {
  return {
    name,
    [LOCATIONS.LOCATION]: location,
    [MODES.MODE]: MODES.EXPLORING,
    [CHARACTER]: character,
    health: 90,
    maxHealth: 100,
    points: 0,
    equipped: [],
    stashed: [],
    [LOCATIONS.LOCATION + HISTORY]: [],
  };
}
