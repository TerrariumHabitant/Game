
import colors from "colors";
import * as MODES from "./modes";
import * as LOCATIONS from "./locations";

export const BLUE = "BlueGuy".brightBlue;
export const RED = "RedGuy".brightRed;
export const GREEN = "GreenGuy".brightGreen;
export const PURPLE = "PurpleGuy".magenta;

export const HISTORY = "history";

export function createCharacter (name, location, character) {
    return {
        name,
        [LOCATIONS.LOCATION]: location,
        [MODES.MODE]: MODES.EXPLORING,
        character,
        health: 50,
        maxHealth: 50,
        points: 0,
        equipped: [],
        stashed: [],
        [LOCATIONS.LOCATION+HISTORY]: []
    };
}