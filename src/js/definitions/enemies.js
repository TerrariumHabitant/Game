// functions, global varibles, and artwork imported for this game mode
import chalk from 'chalk';
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
export const DESCRIPTION = 'description';
export const HITPOINTS = 'hitpoints';
export const LOSEPOINTS = 'losepoints';
export const WIN_TEXT = 'win_text';
export const LOSE_TEXT = 'lose_text';
export const RUN_TEXT = 'run_text';
export const XPPOINTS_TEXT = 'xppoints_text';
export const XPPOINTS = 'xppoints';
export const ENEMYHEALTH = 'enemyhealth';
export const MIN_LEVEL = 'min_level';

// Types of Enemies
export const BAT = chalk.grey('Bat');
export const RATHERLARGESNAKE = chalk.red('Rather large snake');
export const TROLL = chalk.bgGreen('Troll');
export const ELF = chalk.cyan('Elf');
export const OGRE = chalk.green('Ogre');
export const CYCLOPS = chalk.white('Cyclops');
export const DRAGON = chalk.yellow('Dragon');

// Enemy maps ADD RUN_TEXT!!!!!
export function getAllEnemies() {
  return {
    [BAT]: {
      [DESCRIPTION]: `Oh no! It's a ${BAT}! It looks something like this: ${randomSelection(
        bat.artwork,
      )}`,
      [LOCATIONS]: [CAVE, NORTHTUNNEL, MINE, SOUTHTUNNEL, CAVERN, EASTTUNNEL, SHAFT],
      [LOSEPOINTS]: randomInt(5, 15),
      [HITPOINTS]: randomInt(5, 10), // weapons
      [RUN_TEXT]:
        'You are running from a bat. As you go, now may be a very appropriate time to consider the life choices that brought you to this particular juncture.',
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
      [RUN_TEXT]: 'You are running from a snake, which I guess is sort of scary',
      [WIN_TEXT]: 'You won. That makes sense, it was only a snake. ',
      [LOSE_TEXT]: "You lost; that's a bit dissappointing. ",
      [XPPOINTS_TEXT]: `You have won 20 points Cool. `,
      [ENEMYHEALTH]: 10,
      [XPPOINTS]: 20,
      [MIN_LEVEL]: 2,
    },
    [TROLL]: {
      [DESCRIPTION]: `It seems as though you've met a Troll.It looks something like this: ${troll.artwork[0]}`,
      [LOCATIONS]: [MINE, SOUTHTUNNEL, CAVERN, EASTTUNNEL, SHAFT],
      [LOSEPOINTS]: randomInt(20, 30),
      [HITPOINTS]: randomInt(10, 20), // weapons
      [RUN_TEXT]: 'You are now running from a troll, that makes sense',
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
      [RUN_TEXT]: 'You are running from an elf',
      [WIN_TEXT]: 'Actually, that was very well done. ',
      [LOSE_TEXT]: 'You lost. ',
      [XPPOINTS_TEXT]: `You have won 40 points Cool. `,
      [ENEMYHEALTH]: 40,
      [XPPOINTS]: 40,
      [MIN_LEVEL]: 4,
    },
    [OGRE]: {
      [DESCRIPTION]: `Well, now this is definitely bad. In front of you is an Ogre - it looks something like this: ${ogre.artwork[0]}`,
      [LOCATIONS]: [CAVERN, EASTTUNNEL, SHAFT],
      [LOSEPOINTS]: randomInt(40, 50),
      [HITPOINTS]: randomInt(30, 40), // weapons
      [RUN_TEXT]: 'You are now running from an ogre',
      [WIN_TEXT]: 'You win! ',
      [LOSE_TEXT]: "You've lost. ",
      [XPPOINTS_TEXT]: `You have won 50 points, good job. `,
      [ENEMYHEALTH]: 50,
      [XPPOINTS]: 50,
      [MIN_LEVEL]: 5,
    },
    [CYCLOPS]: {
      [DESCRIPTION]: `In the dark you can see something moving towards you...it's a Cyclops You should run very far away. Also, It looks something like this: ${cyclops.artwork[0]} `,
      [LOCATIONS]: [EASTTUNNEL, SHAFT],
      [LOSEPOINTS]: randomInt(50, 60),
      [HITPOINTS]: randomInt(40, 50), // weapons
      [RUN_TEXT]: 'You are running from a cyclops',
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
      [RUN_TEXT]:
        'You are running from a dragon, even though he proably has the key around his shaft',
      [WIN_TEXT]: 'Okay, you got me. I was NOT expecting that. ',
      [LOSE_TEXT]: 'Hehehe...You lost!',
      [XPPOINTS_TEXT]: `You have won 100 points. Good job. `,
      [ENEMYHEALTH]: 70,
      [XPPOINTS]: 100,
      [MIN_LEVEL]: 7,
    },
  };
}
