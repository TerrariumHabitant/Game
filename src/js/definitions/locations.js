import colors, { random } from "colors";

import { randomSelection } from "../tools";
import * as ACTIONS from "./actions";
import * as MODES from "./modes";


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

export const CAVE = "cave";
export const TUNNEL1 = "tunnel1";
export const TUNNEL2 = "tunnel2";
export const TUNNEL3 = "tunnel3";
export const MINE = "mine";
export const SECONDTUNNEL1 = "secondtunnel1";
export const  cavern = "cavern";

export function locations(character) {

    return {
        [CAVE]: {
            "description": commonPlaceDescriptions.cave + "You hold your flash light out in front of you and in the dim light you can faintly see a big, old oak door. You walk up What do you want to do?\n",
            "forbidden_acts": [ACTIONS.SWIM, ACTIONS.FLY],
            [ACTIONS.RUN]: {
              location: randomSelection([TUNNEL1, TUNNEL2, TUNNEL3]),
              mode: MODES.EXPLORING,
            },
            [ACTIONS.HIDE]: {
              location: CAVE,
              mode: MODES.EXPLORING
            }
        },
        [TUNNEL1]: {
            "description": commonActionDescriptions.tunnel1,
            "forbidden_acts": [ACTIONS.SWIM, ACTIONS.FLY],
            [ACTIONS.RUN] : {
              loction: randomSelection([TUNNEL1, TUNNEL2, TUNNEL3]),
              mode: MODE.EXPLORING 
            },
            [ACTIONS.HIDE] : {
              location: TUNNEL1,
              mode: MODES.EXPLORING
            }
        },
        [TUNNEL2] : {
          "description" : commonActionDescriptions.tunnel2, 
          "forbidden_acts" : [ACTIONS.SWIM, ACTIONS.FLY],
          [ACTION.RUN] : {
            loction: randomSelection([TUNNEL1, TUNNEL2, TUNNEL3]),
            mode: MODES.EXPLORING
          },
          [ACTIONS.HIDE] : {
            loction: TUNNEL2,
            mode: MODE.EXPLORING
          }
        },
        [TUNNEL3] : {
          "description": commonActionDescriptions.tunnel3, 
          "forbidden_acts": [ACTIONS.SWIM, ACTIONS.FLY],
          [ACTION.RUN] : {
            location: random.randomSelection([]),
            mode: MODE.EXPLORING
          },
          [ACTIONS.HIDE] : {
            location: TUNNEL3,
            mode: MODE.EXPLORING
          }
        },
        [MINE]: {
          "description": commonActionDescriptions.mine,
          "forbidden_acts": [ACTION.SWIM, ACTION.FLY],
          [ACTION.RUN] : {
            loction : random.randomSelection([]),
            mode: MODE.EXPLORING
          },
          [ACTIONS.HIDE] : {
            location: MINE,
            mode: MODE.EXPLORING
          }
        },
        [secondtunnel1]: {
          "description": commonActionDescriptions.secondtunnel1,
          "forbidden_acts": [ACTION.SWIM, ACTION.FLY],
          [ACTION.RUN] : {
            location: random.randomSelection([]),
            mode: MODE.EXPLORING
          },
          [ACTION.HIDE] : { 
            location: randomSelection([]),
            mode: MODE.EXPLORING 
          }
        },
        [cavern]: {
          "description": commonActionDescriptions.cavern,
          "forbidden_acts": [ACTION.SWIM, ACTION.FLY],
          [ACTION.RUN] : {
            location: random.randomSelection([]),
            mode: MODE.EXPLORING
          },
          [ACTION.HIDE] : { 
            location: randomSelection([]),
            mode: MODE.EXPLORING 
          }
        },
      }
  }

  return {
    "cave": {
      "description": commonPlaceDescriptions.cave + " You hold your flash ligh out in front of you and in the dim light you can faintly see a big, old oak foor. Remember, since you are red you can light on fire in the cave. What do you want to do?\n",
      "actions": {
        "run forward": {
          "result": "tunnel", 
          "description": commonActionDescriptions.run
        },
        "run": {
          "result": "tunnel", 
          "description": commonActionDescriptions.run
        },
        "hide": {
          "result": "cave",
          "description": "You duck behind some rocks on your hands and feet and wait a few moments. Nothing happens. What would you like to do now?\n"
        },
        "explore": {
          "result": "cave",
          "description": "You began towards the door, it's dark and you stumble a lot, the ground is very uneven. As you reach the old door you can see a rusty keyhole, what would you like to do? (type <look for key if you would like to look for a key.\n"
        },
        "start on fire": {
          "result": "cave",
          "description": "You use your superpower to light yourself on fire, the cave slowly illuminates. You see tall stalactites and stalagmites, in front of you is a big, old, oak door. What would you like to do?\n" //(type <explore to go to the door)
        },
        "look for key": {
          "result": "cave. ",
          "description": "The cave is very big and you can't see much. You shine your light around and see lots of stalagmites. But a key is not visible."
        }
      }
    },
    "tunnel": {
      "description": commonPlaceDescriptions.tunnel + " what do you want to do?\n",
      "actions": {
        "run forward" : {
          "result": "mine",
          "description": "You quickly run forward. "
        },
        "run": {
          "result": Math.floor(Math.random()*2),
          "description": "You turn quickly and run. "
        },
        "hide": {
          "result": "tunnel",
          "description": "This tunnel is very narrow, there is no where to hide. Quick, repick!"
        },
        "explore": {
          "result": "mine",
          "description": "You wander to the end of the tunnel and it begins to open up."
        },
        "start on fire": {
          "result": "tunnel",
          "description": "You are on fire, you proceed to panic. "
        },
        "go back": {
          "result": "cave",
          "description": "You are back in the cave now. "
        }
      }
    },
    "mine": {
      "description": commonPlaceDescriptions.mine + " what do you want to do?\n",
      "actions": {
        "run": {
          "result": Math.floor(Math.random()*3),
          "description": " You run quickly, when you've slowed down when you exit the mine. "
        },
        "run forward" : {
          "result": "tunnel",
          "description": "You quickly run forward. "
        },
        "hide" : {
          "result": "mine",
          "description": "You dive onto the floor. "
        },
        "explore" : {
          "result": "mine",
          "description": "You began to walk around the mine. "
        },
        "start on fire" : {
          "result": "mine",
          "description": "You are in the mine. "
        },
        "go back" : {
          "result": "tunnel",
          "description": "This is the tunnel. "
        }
      }
    },
    "second tunnel": {
      "description": commonPlaceDescriptions.secondtunnel + " What do you want to do?\n", 
      "actions": {
        "run" : {
          "result": Math.floor(Math.random()*4),
          "description": "You run quickly. "
        },
        "run forward" : {
          "result": "cavern",
          "description": "You quickly run forward. "
        },
        "hide" : {
          "result": "second tunnel. ",
          "description": "You jump behind a pile of rocks."
        },
        "explore" : {
          "result": " Second tunnel. ",
          "desription": "You begin to walk carefully around through the tunnel. It is very narrow and there is not much to see. "
        },
        "start on fire" : {
          "result": "second tunnel. ",
          "description": "You begin to feel very hot, you look around and you can see that the walls are rough and filled with crevices and bumps. "
        },
        "go back" : { 
          "result": "mine. ",
          "description": "You go back to the mine. "
        }
      }
    },
    "cavern": {
      "description": commonPlaceDescriptions.cavern + " what do you want to do?\n",
      "actions": {
        "run forward" : {
          "result": "cavern",
          "description": "You quickly run forward, but it is a dead end. "
        },
        "run": {
          "result": Math.floor(Math.random()*5),
          "description": "You start running. "
        },
        "hide" : {
          "result": "cavern",
          "description": "This is a cavern. "
        }, 
        "explore" : { 
          "result": "second tunnel",
          "description": "It is very dark you find a tunnel and walk down it, you realize you have already been down this tunnel. "
        },
        "start on fire" : {
          "result": "cavern",
          "description": "You are in a cavern. "
        },
        "go back" : {
          "result": "second tunnel",
          "description": " You are now back in the mine. "
        }
      }
    }
}
