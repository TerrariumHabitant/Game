import { getAllEnemies } from './definitions/enemies'; // getAllEnemies has no parameters
import { prompt } from './tools';
import * as MODES from './definitions/modes';
import { LOCATION, LOCATIONS } from './definitions/locations';
import { MIN_LEVEL, LEVEL } from './definitions/enemies';
export function print(string) {
  console.log(string);
}

// pick when, where and which enemy appears - WEAPONS AND XP
export async function fight(character) {
  const enemies = getAllEnemies();
  const pertinentEnemies = Object.keys(enemies).reduce((enemiesReduction, enemyKey) => {
    if (
      enemies[enemyKey][LOCATIONS].contains(character[LOCATION]) &&
      enemies[enemyKey][MIN_LEVEL] <= character[LEVEL]
    ) {
      enemiesReduction[enemyKey] = enemies[enemyKey];
    }
    return enemiesReduction;
  }, {});

  // TODO: Temporary
  pertinentEnemies;

  let alive = true;
  let running = false;

  // battle code
  while (alive && !running) {
    let choiceOFight = prompt(
      'You are in fighting mode. What would you like to do?\n You may run, or attack. ',
    );

    // TODO: Temporary
    choiceOFight;

    let chanceOfSuccess = Math.floor(Math.random() * 2);

    // Amount of damaged taken should depend on weapon, weapons gained depend on level. Amount of damage taken to character depends on level -True?
    if (chanceOfSuccess === 1) {
      // enemyHealth = enemyHealth - HITPOINTS;
      // print(`You hit. Their health is now at ${enemyHealth}. They'll will fight back. `);
    } else if (chanceOfSuccess === 0) {
      prompt('You missed. They will attack you. ');
    }

    let secondChanceOfSuccess = Math.floor(Math.random() * 2);

    if (secondChanceOfSuccess === 1) {
      // health = health - LOSEPOINTS;
      // print(`You have been hit, your health is now ${health}`);
    } else if (secondChanceOfSuccess === 0) {
      print('They missed. Lucky you.');
    }

    //   if (choiceOfFight === 'run') {
    //     running = true;
    //     [MODES.MODE]: MODES.EXPLORING                      //EMENY HEALTH, IF BATTLE IS WON
    //   } else if(enemyHealth <= 0) {
    //     [MODES.MODE]: MODES.EXPLORING
    //     alert('You have won ')//xp
    //   } else if (health <= 0) {
    //     print('You died. \n\n--------- Game Over ---------');
    //     alive = false; // End Game
    //   }
  }

  // Update character's data and return
  return {
    ...character,
    [MODES.MODE]: MODES.EXPLORING,
  };
}
