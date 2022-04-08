import { print, clear, prompt, wait, saveCharacter, load } from './tools';

import * as CHARACTERS from './definitions/Character';
import * as LOCATIONS from './definitions/locations';
import * as MODES from './definitions/modes';
import {CHARACTER, COLOR, createCharacter, NAME} from './definitions/Character';
import { explore } from './explore';

async function setup() {
  clear();
  const name = await prompt('What is your name?');

  let character;

  if (name === 'load') {
    // Load the character
    character = await load();
    // Repopulate details that were not persisted
    switch (character[CHARACTER]) {
      case CHARACTERS.RED[NAME]: character[CHARACTER] = CHARACTERS.RED; break;
      case CHARACTERS.BLUE[NAME]: character[CHARACTER] = CHARACTERS.BLUE; break;
      case CHARACTERS.GREEN[NAME]: character[CHARACTER] = CHARACTERS.GREEN; break;
      case CHARACTERS.PURPLE[NAME]: character[CHARACTER] = CHARACTERS.PURPLE; break;
    }
  } else {
    // Let the user choose a character
    print('Hi ' + name + ' Welcome to The Game\n');
    character = await prompt(
      'What character would you like to be?' +
      `\n<${CHARACTERS.RED[COLOR](CHARACTERS.RED[NAME])}` +
      `\n<${CHARACTERS.BLUE[COLOR](CHARACTERS.BLUE[NAME])}` +
      `\n<${CHARACTERS.GREEN[COLOR](CHARACTERS.GREEN[NAME])}` +
      `\n<${CHARACTERS.PURPLE[COLOR](CHARACTERS.PURPLE[NAME])}` +
      '\n',
      [
        CHARACTERS.RED[NAME],
        CHARACTERS.BLUE[NAME],
        CHARACTERS.GREEN[NAME],
        CHARACTERS.PURPLE[NAME],
      ],
    );
    switch (character) {
      case CHARACTERS.RED[NAME]: character = CHARACTERS.RED; break;
      case CHARACTERS.BLUE[NAME]: character = CHARACTERS.BLUE; break;
      case CHARACTERS.GREEN[NAME]: character = CHARACTERS.GREEN; break;
      case CHARACTERS.PURPLE[NAME]: character = CHARACTERS.PURPLE; break;
    }
    print('You picked ' + character[COLOR](character[NAME]));
    character = createCharacter(name, LOCATIONS.CAVE, character);
  }
  await wait(2000);
  return character;
}

async function play(character) {
  let exit = false;
  while (!exit) {
    switch (character.mode) {
      case MODES.EXPLORING:
        character = await explore(character);
        break;
      case MODES.FIGHTING:
        // character = await fight(character);
        break;
    }
    saveCharacter(character);
  }
}

async function game() {
  const character = await setup();
  await play(character);
}

game();
