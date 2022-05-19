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

export const playPoints = 0;
export const level = 1; 

export function level (playPoints, level) {
  if(playerPoints == 1)
    level + 1
  elif(playerPoints == 30 && level == 1)
    level + 1
  elif(playerPoints == 20 && level == 2)    //snake equal or greater
    level + 1
  elif(playerPoints == 40 && level == 3)    //equal or greater
    level + 1
  elif(playerPoints == 50 && level == 4)    //equal or greater
    level + 1
  elif(playerPoints == 70 && level == 5)    //equal or greater
    level + 1
  elif(playerPoints == 90 && level == 6)    //equal or greater
    level + 1
  elif(playPoints == 100 && level == 7)     //level 8, final 
    level + 1  //find key 
}

// Create Character
export function createCharacter(name, location, character, level) {
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
//To level up they must bet the enemy of that level, and occational one other enemy 

// Player defaults level 1, if they beat (two bats - 10xp - and find a pointy stick - 10xp) they level up to two + 5health.
// Player is now on level 2 if they beat (the snake - who gives them 20xp as well as some armour)
// Player is now on level 3 if they beat (a troll - 30xp and one other monster. They may also find a sword ) they level up + 10 health
// player is now on level 4 if they beat (an elf - 40xpand at least one other monster or find the shot gun) they level up + 20 health
// player is now on level 5 if they beat (the ogre - they may also find a double barrel shotgun) they level up + 30 health
// Player is now on level 6 if they beat (cyclops they gain 50 health. They may also find am bigger gun) they level up + 40 health
// player is now on level 7 if they beat (the dragon - 100xp) they find the key and win the game
