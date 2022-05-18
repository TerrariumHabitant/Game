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



// level, equipped, and stashed
// Player defaults level 1, if they beat (two bats - 10xp - and find a pointy stick - 10xp) they level up to two + 5health. 
// Player is now on level 2 if they beat (the snake - who gives them 30xp as well as some armour)
// Player is now on level 3 if they beat (a troll - 20xp and one other monster. They may also find a sword ) they level up + 10 health  
// player is now on level 4 if they beat (an elf and at least one other monster or find the shot gun) they level up + 20 health
// player is now on level 5 if they beat (the ogre - they may also find a double barrel shotgun) they level up + 30 health 
// Player is now on level 6 if they beat (cyclops they gain 50 health. They may also find am bigger gun) they level up + 40 health
// player is now on level 7 if they beat (the dragon) they find the key and win the game