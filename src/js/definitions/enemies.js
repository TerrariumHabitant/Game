//functions, global varibles, and artwork imported for this game mode
import { randomInt, randomSelection } from '../tools';
import { CAVE, NORTHTUNNEL, MINE, SOUTHTUNNEL, CAVERN, EASTTUNNEL, SHAFT } from './locations';
import * as bat from '../artwork/bat';

// Interact between character and enemies
export const DESCRIPTION = 'description';
export const LOCATIONS = 'locations';
export const HITPOINTS = 'hitpoints';
export const LOSEPOINTS = 'losepoints';
export const WIN_TEXT = 'win_text';
export const LOSE_TEXT = 'lose_text';

// Possible enemies
export const BAT = 'bat';
export const RATHERLARGESNAKE = 'ratherlargesnake';
export const TROLL = 'troll';
export const ELF = 'elf';
export const OGRE = 'ogre';
export const CYCLOPS = 'cyclops';
export const DRAGON = 'dragon';

// Types of Enemies: bats, trolls...
// Function(location, character)
// Enemies points
// Key points

// level - items acquired, time played...

export function getAllEnemies(/* character, location, level*/) {
  return {
    [BAT]: {
      [DESCRIPTION]:
        `Oh no! It's a ${BAT}!` + ' It looks something like this:' + randomSelection(bat.artwork),
      [LOCATIONS]: [CAVE, NORTHTUNNEL, MINE, SOUTHTUNNEL, CAVERN, EASTTUNNEL, SHAFT],
      [LOSEPOINTS]: randomInt(5, 15),
      [HITPOINTS]: randomInt(5, 10), // weapons
      [WIN_TEXT]: `You beat that ${BAT}. Yay?\n\n ... but you gained some experience. So there's that, I guess.`,
      [LOSE_TEXT]: `You were defeated by a ${BAT}. You should probably dwell on that for a while.`,
    },
    [RATHERLARGESNAKE]: {
      [DESCRIPTION]:
        'You see a snake. Not a normal snake though; this is a rather large snake and it should probably raise some concern. ',
      [LOCATIONS]: [NORTHTUNNEL, MINE, SOUTHTUNNEL, CAVERN, EASTTUNNEL, SHAFT],
      [LOSEPOINTS]: randomInt(10, 15),
      [HITPOINTS]: randomInt(), // weapons
      [WIN_TEXT]: 'You won. That makes sense, it was only a snake. ',
      [LOSE_TEXT]: "You lost; that's a bit dissappointing. ",
    },
    [TROLL]: {
      [DESCRIPTION]: `It seems as though you've met a ${TROLL} I imagine this will be interesting. `,
      [LOCATIONS]: [MINE, SOUTHTUNNEL, CAVERN, EASTTUNNEL, SHAFT],
      [LOSEPOINTS]: randomInt(20, 30),
      [HITPOINTS]: randomInt(), // weapons
      [WIN_TEXT]: 'You won, good job I guess. ',
      [LOSE_TEXT]: 'You lost. No big suprise there, huh?',
    },
    [ELF]: {
      [DESCRIPTION]: `There appears to be an ${ELF} in front of you. He seems mad about something...`, // Help the elf?
      [LOCATIONS]: [SOUTHTUNNEL, CAVERN, EASTTUNNEL, SHAFT],
      [LOSEPOINTS]: randomInt(30, 40),
      [HITPOINTS]: randomInt(), // weapons?
      [WIN_TEXT]: 'Actually, that was very well done. ',
      [LOSE_TEXT]: 'You lost. ',
    },
    [OGRE]: {
      [DESCRIPTION]: `Well, now this is definitely bad. In front of you is an ${OGRE}`,
      [LOCATIONS]: [CAVERN, EASTTUNNEL, SHAFT],
      [LOSEPOINTS]: randomInt(40, 50),
      [HITPOINTS]: randomInt(), // weapons
      [WIN_TEXT]: 'You win! ',
      [LOSE_TEXT]: "You've lost. ",
    },
    [CYCLOPS]: {
      [DESCRIPTION]: `In the dark you can see something moving towards you. Yeah...it's a ${CYCLOPS} You should run very far away.`,
      [LOCATIONS]: [EASTTUNNEL, SHAFT],
      [LOSEPOINTS]: randomInt(50, 60),
      [HITPOINTS]: randomInt(), // weapons
      [WIN_TEXT]: 'Wow, yeah...I did not see that coming. ',
      [LOSE_TEXT]: "You've lost. I can't say that that does't make sense. ",
    },
    [DRAGON]: {
      [DESCRIPTION]: `It suddenly seems very hot - likely because there is a ${DRAGON} And I give up; do what you want`,
      [LOCATIONS]: [SHAFT],
      [LOSEPOINTS]: randomInt(60, 75),
      [HITPOINTS]: randomInt(), // weapons - certain weapon to win, as well as level?
      [WIN_TEXT]: 'Okay, you got me. I was NOT expecting that. ',
      [LOSE_TEXT]: 'Hehehe...You lost!',
    },
  };
}
