// actions and functions called from elsewhere in the code
import { randomInt, randomSelection } from '../tools';
import * as ACTIONS from './actions';
import * as MODES from './modes';
import { HISTORY } from './character';
import * as cave from '../artwork/cave';

// Description of Commmon Places within the game map
const commonPlaceDescriptions = {
  cave: 'You find yourself in a cave, which is dark, and filled with many bats.',
  northtunnel: 'You enter a tunnel(the northern most tunnel) which is long, and dark, and narrow.',
  northtunnel1:
    'You are back in the North tunnel, this time you notice exactly nothing more or less than you noticed before.', // tunnel 1 = tunnel2 = tunnel3
  tunnel2: 'You are back in the North tunnel again, super fun.',
  mine: 'You seemed to have entered a mine is deep and dark, and there are noises; they are weird.',
  southtunnel:
    'This tunnel is shorter and you can hear drip noises. (This tunnel is the farthest South you can get in this cave system)',
  southtunnel1: 'You are back in the South tunnel.Yay!',
  cavern: 'This space is fairly bigger than you think.',
  easttunnel: 'This tunnel is longer than the previous ones (it is the East tunnel)',
  shaft:
    'There is a railroad here - obviously long since abandoned. There is a cart, and the sun can be seen in the roof in some places, but they are much too far to reach.', // This is as far as you can go.
};

// Global varibles used throughout program
export const DESCRIPTION = 'description';
export const LOCATION = 'location';
export const LOCATIONS = 'locations';
export const RESULT_TEXT = 'result';

export const CAVE = 'cave';
export const NORTHTUNNEL = 'Northtunnel';
export const EASTTUNNEL = 'Easttunnel';
export const MINE = 'mine';
export const SOUTHTUNNEL = 'Southtunnel';
export const CAVERN = 'cavern';
export const SHAFT = 'shaft';

export const NON_ACTION_KEYS = [DESCRIPTION];

// Count the number of times we've been here before (excluding this time)
export function getNumTimesInCurrentLocation(character) {
  return character[LOCATION + HISTORY].reduce(
    (reduced, current) => reduced + (current === character[LOCATION] ? 1 : 0),
    -1,
  );
}
export function getAllLocations(character) {
  const numTimesInThisLocation = getNumTimesInCurrentLocation(character);

  // game play
  return {
    [CAVE]: {
      [DESCRIPTION]:
        commonPlaceDescriptions.cave +
        ' It looks something like this:' +
        randomSelection(cave.artwork) +
        'You hold your flash light out in front of you and in the dim light you can faintly see a big, old oak door.\nWhat do you want to do?' +
        (character.hasTheOakDoorKey ? '\nRemember, you have a key' : ''),
      [ACTIONS.RUN]: {
        [LOCATION]: randomSelection([NORTHTUNNEL, MINE]),
        [MODES.MODE]: MODES.EXPLORING,
      },
      [ACTIONS.HIDE]: {
        [RESULT_TEXT]: 'Great plan of action. ',
        [LOCATION]: CAVE,
        [MODES.MODE]: MODES.EXPLORING,
      },
      'sniff the door (Type <a>) ': {
        [RESULT_TEXT]: 'It smells like a big, old oak door.',
      },
      'search around room for key (Type <b>)': {
        // 1/100 chance finding it on first time, you SHOULD look more than once
        [RESULT_TEXT]: (() => {
          if (character.foundTheOakDoorKey) {
            return "Yup. It's in your pocket. Just where you left it.";
          }
          const chance = randomInt(1, 100);
          if (chance === 43) {
            character.foundTheOakDoorKey = true;
            return "You found the key! That should have required more work...\nCongradulations anyway, you've won";
          }
          return (
            'You vainly assume that a key would just be lying about. And so you search. And search. And search. And your arrogance is rightly rewarded with nothing at all.\nPerhaps you should explore the cave more thoroughly.\n\n' +
            chance
          );
        })(),
      },
      // 'pick up key': {
      //   [RESULT_TEXT]: 'You pick up the key and put it in your pocket',
      //   hasTheOakDoorKey: true,
      // },
      // ...(character.hasTheOakDoorKey
      //   ? {
      //       'use the key': {
      //         [RESULT_TEXT]: 'You used the key on the door, and it is now open',
      //         oakDoorIsOpen: true,
      //       },
      //     }
      // : {}),
      'find a way out (Type <c>)': {
        [RESULT_TEXT]: 'You should probaly start by finding the key to the door. ',
      },
      'go to door (Type <d>)': {
        [RESULT_TEXT]:
          'You notice the door has a keyhole, it is probably VERY good that you noticed this.',
      },
      scream: {
        [RESULT_TEXT]: 'You may.' + '                                      \n\n' + 'Now what?',
      },
    },
    [NORTHTUNNEL]: {
      [DESCRIPTION]: (() => {
        if (numTimesInThisLocation === 0) {
          return commonPlaceDescriptions.northtunnel;
        }
        return (
          [commonPlaceDescriptions.northtunnel1] +
          ` and you've been here ${numTimesInThisLocation} times before!`
        );
      })(),
      [ACTIONS.RUN]: {
        [LOCATION]: randomSelection([MINE, CAVE]),
        [MODES.MODE]: MODES.EXPLORING,
      },
      [ACTIONS.HIDE]: {
        [RESULT_TEXT]: 'You are now hiding behind what feels like a rock.',
        [LOCATION]: randomSelection([NORTHTUNNEL]),
        [MODES.MODE]: MODES.EXPLORING,
      },
      '': {
        [RESULT_TEXT]: '',
      },
    },
    [MINE]: {
      [DESCRIPTION]: commonPlaceDescriptions.mine,
      [ACTIONS.RUN]: {
        [LOCATION]: randomSelection([SOUTHTUNNEL, NORTHTUNNEL]),
        [MODES.MODE]: MODES.EXPLORING,
      },
      [ACTIONS.HIDE]: {
        [RESULT_TEXT]: 'You are now hiding next to a wall.',
        [LOCATION]: randomSelection([MINE]),
        [MODES.MODE]: MODES.EXPLORING,
      },
    },
    [SOUTHTUNNEL]: {
      [DESCRIPTION]: commonPlaceDescriptions.southtunnel,
      [ACTIONS.RUN]: {
        [LOCATION]: randomSelection([MINE, CAVERN]),
        [MODES.MODE]: MODES.EXPLORING,
      },
      [ACTIONS.HIDE]: {
        [RESULT_TEXT]: "Good job, you've successfully avoided any chance of heroism! ",
        [LOCATION]: randomSelection([SOUTHTUNNEL]),
        [MODES.MODE]: MODES.EXPLORING,
      },
    },
    [CAVERN]: {
      [DESCRIPTION]: commonPlaceDescriptions.cavern,
      [ACTIONS.RUN]: {
        [LOCATION]: randomSelection([EASTTUNNEL, SOUTHTUNNEL]),
        [MODES.MODE]: MODES.EXPLORING,
      },
      [ACTIONS.HIDE]: {
        [RESULT_TEXT]: "Cool...Cool...Now what's the plan? ",
        [LOCATION]: randomSelection([CAVERN]),
        [MODES.MODE]: MODES.EXPLORING,
      },
    },
    [EASTTUNNEL]: {
      [DESCRIPTION]: commonPlaceDescriptions.easttunnel,
      [ACTIONS.RUN]: {
        [LOCATION]: randomSelection([SHAFT, CAVERN]),
        [MODES.MODE]: MODES.EXPLORING,
      },
      [ACTIONS.HIDE]: {
        [RESULT_TEXT]: "Oh, good, now you're hiding ",
        [LOCATION]: randomSelection([EASTTUNNEL]),
        [MODES.MODE]: MODES.EXPLORING,
      },
    },
    [SHAFT]: {
      [DESCRIPTION]: commonPlaceDescriptions.shaft,
      [ACTIONS.RUN]: {
        [LOCATION]: randomSelection([EASTTUNNEL, SHAFT]),
        [MODES.MODE]: MODES.EXPLORING,
      },
      [ACTIONS.HIDE]: {
        [RESULT_TEXT]: 'Now no one can see you...',
        [LOCATION]: randomSelection([SHAFT]),
        [MODES.MODE]: MODES.EXPLORING,
      },
    },
  };
}

// Old Version

//   return {
//     "cave": {
//       [DESCRIPTION]: commonPlaceDescriptions.cave + " You hold your flash ligh out in front of you and in the dim light you can faintly see a big, old oak foor. Remember, since you are red you can light on fire in the cave. What do you want to do?\n",
//       "actions": {
//         "run forward": {
//           "result": "tunnel",
//           [DESCRIPTION]: commonActionDescriptions.run
//         },
//         "run": {
//           "result": "tunnel",
//           [DESCRIPTION]: commonActionDescriptions.run
//         },
//         "hide": {
//           "result": "cave",
//           [DESCRIPTION]: "You duck behind some rocks on your hands and feet and wait a few moments. Nothing happens. What would you like to do now?\n"
//         },
//         "explore": {
//           "result": "cave",
//           [DESCRIPTION]: "You began towards the door, it's dark and you stumble a lot, the ground is very uneven. As you reach the old door you can see a rusty keyhole, what would you like to do? (type <look for key if you would like to look for a key.\n"
//         },
//         "start on fire": {
//           "result": "cave",
//           [DESCRIPTION]: "You use your superpower to light yourself on fire, the cave slowly illuminates. You see tall stalactites and stalagmites, in front of you is a big, old, oak door. What would you like to do?\n" //(type <explore to go to the door)
//         },
//         "look for key": {
//           "result": "cave. ",
//           [DESCRIPTION]: "The cave is very big and you can't see much. You shine your light around and see lots of stalagmites. But a key is not visible."
//         }
//       }
//     },
//     "tunnel": {
//       [DESCRIPTION]: commonPlaceDescriptions.tunnel + " what do you want to do?\n",
//       "actions": {
//         "run forward" : {
//           "result": "mine",
//           [DESCRIPTION]: "You quickly run forward. "
//         },
//         "run": {
//           "result": Math.floor(Math.random()*2),
//           [DESCRIPTION]: "You turn quickly and run. "
//         },
//         "hide": {
//           "result": "tunnel",
//           [DESCRIPTION]: "This tunnel is very narrow, there is no where to hide. Quick, repick!"
//         },
//         "explore": {
//           "result": "mine",
//           [DESCRIPTION]: "You wander to the end of the tunnel and it begins to open up."
//         },
//         "start on fire": {
//           "result": "tunnel",
//           [DESCRIPTION]: "You are on fire, you proceed to panic. "
//         },
//         "go back": {
//           "result": "cave",
//           [DESCRIPTION]: "You are back in the cave now. "
//         }
//       }
//     },
//     "mine": {
//       [DESCRIPTION]: commonPlaceDescriptions.mine + " what do you want to do?\n",
//       "actions": {
//         "run": {
//           "result": Math.floor(Math.random()*3),
//           [DESCRIPTION]: " You run quickly, when you've slowed down when you exit the mine. "
//         },
//         "run forward" : {
//           "result": "tunnel",
//           [DESCRIPTION]: "You quickly run forward. "
//         },
//         "hide" : {
//           "result": "mine",
//           [DESCRIPTION]: "You dive onto the floor. "
//         },
//         "explore" : {
//           "result": "mine",
//           [DESCRIPTION]: "You began to walk around the mine. "
//         },
//         "start on fire" : {
//           "result": "mine",
//           [DESCRIPTION]: "You are in the mine. "
//         },
//         "go back" : {
//           "result": "tunnel",
//           [DESCRIPTION]: "This is the tunnel. "
//         }
//       }
//     },
//     "second tunnel": {
//       [DESCRIPTION]: commonPlaceDescriptions.secondtunnel + " What do you want to do?\n",
//       "actions": {
//         "run" : {
//           "result": Math.floor(Math.random()*4),
//           [DESCRIPTION]: "You run quickly. "
//         },
//         "run forward" : {
//           "result": "cavern",
//           [DESCRIPTION]: "You quickly run forward. "
//         },
//         "hide" : {
//           "result": "second tunnel. ",
//           [DESCRIPTION]: "You jump behind a pile of rocks."
//         },
//         "explore" : {
//           "result": " Second tunnel. ",
//           "desription": "You begin to walk carefully around through the tunnel. It is very narrow and there is not much to see. "
//         },
//         "start on fire" : {
//           "result": "second tunnel. ",
//           [DESCRIPTION]: "You begin to feel very hot, you look around and you can see that the walls are rough and filled with crevices and bumps. "
//         },
//         "go back" : {
//           "result": "mine. ",
//           [DESCRIPTION]: "You go back to the mine. "
//         }
//       }
//     },
//     "cavern": {
//       [DESCRIPTION]: commonPlaceDescriptions.cavern + " what do you want to do?\n",
//       "actions": {
//         "run forward" : {
//           "result": "cavern",
//           [DESCRIPTION]: "You quickly run forward, but it is a dead end. "
//         },
//         "run": {
//           "result": Math.floor(Math.random()*5),
//           [DESCRIPTION]: "You start running. "
//         },
//         "hide" : {
//           "result": "cavern",
//           [DESCRIPTION]: "This is a cavern. "
//         },
//         "explore" : {
//           "result": "second tunnel",
//           [DESCRIPTION]: "It is very dark you find a tunnel and walk down it, you realize you have already been down this tunnel. "
//         },
//         "start on fire" : {
//           "result": "cavern",
//           [DESCRIPTION]: "You are in a cavern. "
//         },
//         "go back" : {
//           "result": "second tunnel",
//           [DESCRIPTION]: " You are now back in the mine. "
//         }
//       }
//     }
// }
