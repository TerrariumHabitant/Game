import { HITPOINTS, LOSEPOINTS, getAllEnemies } from './definitions/enemies'; // getAllEnemies has no parameters
import { prompt } from './tools';
//import { createCharacter } from './character';
import { BAT, RATHERLARGESNAKE, TROLL, ELF, ORGRE, CYCLOPS, DRAGON } from './fight'; // These are called in getAllEnemies
import { createCharacter } from './definitions/character';
export function print(string) {
  console.log(string);
}


export function fight(character, enemies) {       //pick when, where and which enemy appears 
  let alive = true;
  let running = false;

  while (alive && !running) {
    let choiceOfFight = prompt(
      'You are in fighting mode. What would you like to do?\n You may run, or attack. ',
    );

    let chanceOfSuccess = Math.floor(Math.random() * 2);

    // Amount of damaged taken should depend on weapon, weapons gained depend on level. Amount of damage taken to character depends on level
    if (chanceOfSuccess === 1) {
      enemyHealth = enemyHealth - HITPOINTS;
      print(`You hit. Their health is now at ${enemyHealth}. They'll will fight back. `);
    } else if (chanceOfSuccess === 0) {
      prompt('You missed. They will attack you. ');
    }

    let secondChanceOfSuccess = Math.floor(Math.random() * 2);

    if (secondChanceOfSuccess === 1) {
      health = health - LOSEPOINTS;
      print(`You have been hit, your health is now ${health}`);
    } else if (secondChanceOfSuccess === 0) {
      print('They missed. Lucky you.');
    }

    if (choiceOfFight === 'run') {
      running = true; // Exit this file
    } else if (health < 0) {
      print('You died. \n\n--------- Game Over ---------');
      alive = false; // End Game
    }
  }
}

const enemies = getAllEnemies(createCharacter); 
