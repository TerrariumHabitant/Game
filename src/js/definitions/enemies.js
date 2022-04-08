import {randomInt, randomSelection} from "../tools";
import {CAVE, TUNNEL1} from "./locations";
import * as bat from "../artwork/bat";


export const DESCRIPTION = "description";
export const LOCATIONS = "locations";
export const HITPOINTS = "hitpoints";
export const WIN_TEXT = "win_text";
export const WIN_POINTS = "win_points";
export const LOSE_TEXT = "lose_text";

export const BAT = "bat";
export const TROLL = "troll";
export const DRAGON = "dragon";

//Types of Enemies: bats, trolls...
//Function(location, character)
//Enemies points
//Key points

//level - items acquired, time played...

export function getAllEnemies(character, location, level) {

  return {
    [BAT]: {
      [DESCRIPTION]: `Oh no! It's a ${BAT}!`
        + " It looks something like this:"
        + randomSelection(bat.artwork),
      [LOCATIONS]: [CAVE, TUNNEL1],
      [HITPOINTS]: randomInt(5,15),
      [WIN_POINTS]: randomInt(1, 5),
      [WIN_TEXT]: `You beat that ${BAT}. Yay?\n\n ... but you gained some experience. So there's that, I guess.`,
      [LOSE_TEXT]: `You were defeated by a ${BAT}. You should probably dwell on that for a while.`,
    },
  }
}


