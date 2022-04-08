import colors, { random } from "colors";

import { randomSelection } from "../tools";
import * as ACTIONS from "./actions";
import * as MODES from "./modes";
import {MODE} from "./modes";


const commonPlaceDescriptions = {
  "cave": "The cave is dark, with many bats.",
  "tunnel1": "The tunnel is long, and dark, and narrow",
  "tunnel2": "You are back in the first tunnel, this time you notice...",
  "tunnel3": "You are back in the first tunnel again, this time you notice...",
  "mine": "The mine is deep and dark, and there are noises.",
  "secondtunnel1": "This tunnel is shorter and you can hear drip noises.",
  "cavern": "This space is fairly bigger than you think."
}

const commonActionDescriptions = {
  "run": "you began to run ",
  "look for key": "You began to search. "
}

export const DESCRIPTION = "description";
export const LOCATION = "location";
  
export const CAVE = "cave";
export const TUNNEL1 = "tunnel1";
export const TUNNEL2 = "tunnel2";
export const TUNNEL3 = "tunnel3";
export const MINE = "mine";
export const SECONDTUNNEL1 = "secondtunnel1";
export const CAVERN = "cavern";

export function getAllLocations(character) {

  return {
    [CAVE]: {
        [DESCRIPTION]: commonPlaceDescriptions.cave + "You hold your flash light out in front of you and in the dim light you can faintly see a big, old oak door. You walk up What do you want to do?",
        [ACTIONS.RUN]: {
          [LOCATION]: randomSelection([TUNNEL1, TUNNEL2, TUNNEL3]),
          [MODE]: MODES.EXPLORING,
        },
        [ACTIONS.HIDE]: {
          [LOCATION]: CAVE,
          [MODE]: MODES.EXPLORING
        }
    },
    [TUNNEL1]: {
        [DESCRIPTION]: commonPlaceDescriptions.tunnel1,
        [ACTIONS.RUN] : {
          [LOCATION]: randomSelection([TUNNEL1, TUNNEL2, TUNNEL3]),
          [MODE]: MODES.EXPLORING
        },
        [ACTIONS.HIDE] : {
          [LOCATION]: randomSelection([TUNNEL1]),
          [MODE]: MODES.EXPLORING
        }
    },
    [TUNNEL2] : {
      [DESCRIPTION] : commonPlaceDescriptions.tunnel2, 
      [ACTIONS.RUN] : {
        [LOCATION]: randomSelection([TUNNEL1, TUNNEL2, TUNNEL3]),
        [MODE]: MODES.EXPLORING
      },
      [ACTIONS.HIDE] : {
        [LOCATION]: randomSelection([TUNNEL2]),
        [MODE]: MODES.EXPLORING
      }
    },
    [TUNNEL3] : {
      [DESCRIPTION]: commonPlaceDescriptions.tunnel3, 
      [ACTIONS.RUN] : {
        [LOCATION]: randomSelection([TUNNEL3]),
        [MODE]: MODES.EXPLORING
      },
      [ACTIONS.HIDE] : {
        [LOCATION]: randomSelection([TUNNEL3]),
        [MODE]: MODES.EXPLORING
      }
    },
    [MINE]: {
      [DESCRIPTION]: commonPlaceDescriptions.mine,
      [ACTIONS.RUN] : {
        [LOCATION] : randomSelection([MINE]),
        [MODE]: MODES.EXPLORING
      },
      [ACTIONS.HIDE] : {
        [LOCATION]: randomSelection([MINE]),
        [MODE]: MODES.EXPLORING
      }
    },
    [SECONDTUNNEL1]: {
      [DESCRIPTION]: commonPlaceDescriptions.secondtunnel1,
      [ACTIONS.RUN] : {
        [LOCATION]: randomSelection([SECONDTUNNEL1]),
        [MODE]: MODES.EXPLORING
      },
      [ACTIONS.HIDE] : {
        [LOCATION]: randomSelection([SECONDTUNNEL1]),
        [MODE]: MODES.EXPLORING
      }
    },
    [CAVERN]: {
      [DESCRIPTION]: commonPlaceDescriptions.cavern,
      [ACTIONS.RUN] : {
        [LOCATION]: randomSelection([CAVERN]),
        [MODE]: MODES.EXPLORING
      },
      [ACTIONS.HIDE] : {
        [LOCATION]: randomSelection([CAVERN]),
        [MODE]: MODES.EXPLORING
      }
    }
  }
}

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
