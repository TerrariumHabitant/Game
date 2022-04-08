import {alert, clear, prompt} from './tools';

import * as CHARACTERS from "./definitions/Character";
import * as LOCATIONS from './definitions/locations';
import * as MODES from "./definitions/modes";
import {createCharacter} from "./definitions/Character";
import {explore} from "./explore";

async function game() {
    clear();
    const name = await prompt("What is your name?");
    alert("Hi " + name + " Welcome to The Game\n");
    const characterChoice = await prompt(
    `What character would you like to be?\n<${
        CHARACTERS.RED}\n<${
        CHARACTERS.BLUE}\n<${
        CHARACTERS.GREEN}\n<${
        CHARACTERS.PURPLE}\n`);
    alert("You picked " + characterChoice)

    let character = createCharacter(name, LOCATIONS.CAVE, characterChoice);

    while(true) {
        switch(character.mode) {
            case MODES.EXPLORING:
                character = await explore(character);
                break;
            case MODES.FIGHTING:
                // character = await fight(character);
                break;
        }
    }
}

game();