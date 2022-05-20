import { HITPOINTS, LOSEPOINTS, getAllEnemies } from './definitions/enemies'; // getAllEnemies has no parameters
import { prompt, randomSelection } from './tools';
import { BAT, RATHERLARGESNAKE, TROLL, ELF, OGRE, CYCLOPS, DRAGON } from './fight';
import { createCharacter } from './definitions/character';
import * as MODES from './modes';
export function print(string) {
  console.log(string);
}

// pick when, where and which enemy appears - WEAPONS AND XP
export function fight(createCharacter, getAllEnemies) {
  if (createCharacter == level1) {                                               // location and enemy -- IN ENEMY CODE
    randomSelection([getAllEnemies], BAT);                                      // Used function as a map to call specific return values within function
  } else if (createCharacter == level2) {
    randomSelection([getAllEnemies], RATHERLARGESNAKE);
  } else if (createCharacter == level3) {
    randomSelection([getAllEnemies], TROLL);
  } else if (createCharacter == level4) {
    randomSelection([getAllEnemies], ELF);
  } else if (createCharacter == level5) {
    randomSelection([getAllEnemies], OGRE);
  } else if (createCharacter == level6) {
    randomSelection([getAllEnemies], CYCLOPS);
  } else if (createCharacter == level7) {
    randomSelection(getAllEnemies), DRAGON;
  } else if (createCharacter == level8) {
    // find key
  }

  let alive = true;
  let running = false;

  // battle code
  while (alive && !running) {
    let choiceOfFight = prompt(
      'You are in fighting mode. What would you like to do?\n You may run, or attack. ',
    );

    let chanceOfSuccess = Math.floor(Math.random() * 2);

    // Amount of damaged taken should depend on weapon, weapons gained depend on level. Amount of damage taken to character depends on level -True?
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
      running = true;
      [MODES.MODE]: MODES.EXPLORING                      //EMENY HEALTH, IF BATTLE IS WON
    } else if(enemyHealth <= 0) {
      [MODES.MODE]: MODES.EXPLORING
      alert('You have won ')//xp
    } else if (health <= 0) {
      print('You died. \n\n--------- Game Over ---------');
      alive = false; // End Game
    }
  }
}
