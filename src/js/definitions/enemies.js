// functions, global varibles, and artwork imported for this game mode
import { randomInt, randomSelection } from '../tools';
import {
  LOCATIONS,
  CAVE,
  NORTHTUNNEL,
  MINE,
  SOUTHTUNNEL,
  CAVERN,
  EASTTUNNEL,
  SHAFT,
} from './locations';
import * as bat from '../artwork/bat';
import * as ratherLargeSnake from '../artwork/ratherLargeSnake';
import * as troll from '../artwork/troll';
import * as elf from '../artwork/elf';
import * as ogre from '../artwork/ogre';
import * as cyclops from '../artwork/cyclops';
import * as dragon from '../artwork/dragon';

// Interact between character and enemies
export const COLOR = 'color';
export const DESCRIPTION = 'description';
export const HITPOINTS = 'hitpoints';
export const LOSEPOINTS = 'losepoints';
export const WIN_TEXT = 'win_text';
export const LOSE_TEXT = 'lose_text';
export const XPPOINTS_TEXT = 'xppoints_text';
export const XPPOINTS = 'xppoints';
export const ENEMYHEALTH = 'enemyhealth';
export const MIN_LEVEL = 'min_level';

// Types of Enemies
export const BAT = 'Bat'.grey;
export const RATHERLARGESNAKE = 'Rather large snake'.red;
export const TROLL = 'Troll'.darkgreen;
export const ELF = 'Elf'.cyan;
export const OGRE = 'Ogre'.green;
export const CYCLOPS = 'Cyclops'.white;
export const DRAGON = 'Dragon'.yellow;

// Enemy maps
export function getAllEnemies() {
  return {
    [BAT]: {
      [DESCRIPTION]: `Oh no! It's a ${BAT}! It looks something like this: ${randomSelection(
        bat.artwork,
      )}`,
      [LOCATIONS]: [CAVE, NORTHTUNNEL, MINE, SOUTHTUNNEL, CAVERN, EASTTUNNEL, SHAFT],
      [LOSEPOINTS]: randomInt(5, 15),
      [HITPOINTS]: randomInt(5, 10), // weapons
      [WIN_TEXT]: `You beat that ${BAT}. Yay?\n\n ... but you gained some experience. So there's that, I guess.`,
      [LOSE_TEXT]: `You were defeated by a ${BAT}. You should probably dwell on that for a while.`,
      [XPPOINTS_TEXT]: `You have won 10 points. Cool. `,
      [XPPOINTS]: 10,
      [ENEMYHEALTH]: 5,
      [XPPOINTS]: 10,
      [MIN_LEVEL]: 1,
    },
    [RATHERLARGESNAKE]: {
      [DESCRIPTION]: `You see a snake. Not a normal snake though; this is a rather large snake and it should probably raise some concern. It looks something like this: ${randomSelection(
        ratherLargeSnake.artwork,
      )}`,
      [LOCATIONS]: [NORTHTUNNEL, MINE, SOUTHTUNNEL, CAVERN, EASTTUNNEL, SHAFT],
      [LOSEPOINTS]: randomInt(10, 15),
      [HITPOINTS]: randomInt(10, 15), // weapons
      [WIN_TEXT]: 'You won. That makes sense, it was only a snake. ',
      [LOSE_TEXT]: "You lost; that's a bit dissappointing. ",
      [XPPOINTS_TEXT]: `You have won 20 points Cool. `,
      [ENEMYHEALTH]: 10,
      [XPPOINTS]: 20,
      [MIN_LEVEL]: 2,
    },
    [TROLL]: {
      [DESCRIPTION]: `It seems as though you've met a Troll.It looks something like this: ${randomSelection(
        troll.artwork,
      )}`,
      [LOCATIONS]: [MINE, SOUTHTUNNEL, CAVERN, EASTTUNNEL, SHAFT],
      [LOSEPOINTS]: randomInt(20, 30),
      [HITPOINTS]: randomInt(10, 20), // weapons
      [WIN_TEXT]: 'You won, good job I guess. ',
      [LOSE_TEXT]: 'You lost. No big suprise there, huh?',
      [XPPOINTS_TEXT]: `You have won 30 points Cool. `,
      [ENEMYHEALTH]: 20,
      [XPPOINTS]: 30,
      [MIN_LEVEL]: 3,
    },
    [ELF]: {
      [DESCRIPTION]: `There appears to be an Elf in front of you. He seems mad about something...It looks something like this: ${randomSelection(
        elf.artwork,
      )}`, // Help the elf?
      [LOCATIONS]: [SOUTHTUNNEL, CAVERN, EASTTUNNEL, SHAFT],
      [LOSEPOINTS]: randomInt(30, 40),
      [HITPOINTS]: randomInt(20, 30), // weapons
      [WIN_TEXT]: 'Actually, that was very well done. ',
      [LOSE_TEXT]: 'You lost. ',
      [XPPOINTS_TEXT]: `You have won 40 points Cool. `,
      [ENEMYHEALTH]: 40,
      [XPPOINTS]: 40,
      [MIN_LEVEL]: 4,
    },
    [OGRE]: {
      [DESCRIPTION]: `Well, now this is definitely bad. In front of you is an Ogre - it looks something like this: ${randomSelection(
        ogre.artwork,
      )}`,
      [LOCATIONS]: [CAVERN, EASTTUNNEL, SHAFT],
      [LOSEPOINTS]: randomInt(40, 50),
      [HITPOINTS]: randomInt(30, 40), // weapons
      [WIN_TEXT]: 'You win! ',
      [LOSE_TEXT]: "You've lost. ",
      [XPPOINTS_TEXT]: `You have won 50 points, good job. `,
      [ENEMYHEALTH]: 50,
      [XPPOINTS]: 50,
      [MIN_LEVEL]: 5,
    },
    [CYCLOPS]: {
      [DESCRIPTION]: `In the dark you can see something moving towards you...it's a Cyclops You should run very far away. Also, It looks something like this: ${randomSelection(
        cyclops.artwork,
      )} `,
      [LOCATIONS]: [EASTTUNNEL, SHAFT],
      [LOSEPOINTS]: randomInt(50, 60),
      [HITPOINTS]: randomInt(40, 50), // weapons
      [WIN_TEXT]: 'Wow, yeah...I did not see that coming. ',
      [LOSE_TEXT]: "You've lost. I can't say that that does't make sense. ",
      [XPPOINTS_TEXT]: `You have won 60 points Cool. `,
      [ENEMYHEALTH]: 60,
      [XPPOINTS]: 60,
      [MIN_LEVEL]: 6,
    },
    [DRAGON]: {
      [DESCRIPTION]: `It suddenly seems very hot - likely because there is a Dragon. I give up; do what you want. It looks something like this: ${randomSelection(
        dragon.artwork,
      )}`,
      [LOCATIONS]: [SHAFT],
      [LOSEPOINTS]: randomInt(60, 75),
      [HITPOINTS]: randomInt(50, 60), // weapons - certain weapon to win?
      [WIN_TEXT]: 'Okay, you got me. I was NOT expecting that. ',
      [LOSE_TEXT]: 'Hehehe...You lost!',
      [XPPOINTS_TEXT]: `You have won 100 points. Good job. `,
      [ENEMYHEALTH]: 70,
      [XPPOINTS]: 100,
      [MIN_LEVEL]: 7,
    },
  };
}
