
import colors from "colors";
import * as MODES from "./modes";

export const BLUE = "BlueGuy".brightBlue;
export const RED = "RedGuy".brightRed;
export const GREEN = "GreenGuy".brightGreen;
export const PURPLE = "PurpleGuy".magenta;

export function createCharacter (name, location, character) {
    return {
        name,
        location,
        character,
        mode: MODES.EXPLORING,
        health: 50,
        maxHealth: 50,
        points: 0,
        equipped: [],
        stashed: [],
    };
}