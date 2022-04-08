
import colors from "colors";

export const BLUE = "BlueGuy".brightBlue;
export const RED = "RedGuy".brightRed;
export const GREEN = "GreenGuy".brightGreen;
export const PURPLE = "PurpleGuy".magenta;

export function createCharacter (name, location, character) {
    return {
        name,
        location,
        character,
        mode: 'exploring',
        health: 5,
        maxHealth: 50,
    };
}