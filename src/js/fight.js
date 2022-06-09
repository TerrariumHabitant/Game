import { DESCRIPTION, getAllEnemies } from './definitions/enemies';
import { prompt, randomSelection } from './tools';
import * as MODES from './definitions/modes';
import { LOCATION, LOCATIONS } from './definitions/locations';
import { MIN_LEVEL, LEVEL } from './definitions/enemies';
export function print(string) {
  console.log(string);
}

// pick when, where and which enemy appears - WEAPONS AND XP
export async function fight(character) {
  const enemies = getAllEnemies();
  const pertinentEnemyKeys = Object.keys(enemies).filter((enemyKey) => {
    if (
      enemies[enemyKey][LOCATIONS].includes(character[LOCATION]) &&
      enemies[enemyKey][MIN_LEVEL] <= character[LEVEL]
    ) {
      return true;
    }
    return false;
  });

  // Specific enemy
  const currentEnemyKey = randomSelection(pertinentEnemyKeys);

  const currentEnemy = {
    ...enemies[currentEnemyKey],
  };

  print('THIS IS THE DESCRIPTION OF MY CURRENT ENEMEY');
  print(currentEnemy[DESCRIPTION]);

  let alive = true;
  let running = false;

  // battle code
  while (alive && !running) {
    let choiceOFight = await prompt(
      'You are in fighting mode. What would you like to do?\n You may run, or attack.',
    );
    // TODO: Temporary
    choiceOFight;

    let chanceOfSuccess = Math.floor(Math.random() * 2);

    // Amount of damaged taken should depend on weapon, weapons gained depend on level. Amount of damage taken to character depends on level -True?
    if (chanceOfSuccess === 1) {
      // currentEnemy.health = currentEnemy.health - HITPOINTS;
      // print(`You hit. Their health is now at ${currentEnemy}. They'll will fight back.`);
    } else if (chanceOfSuccess === 0) {
      prompt('You missed. They will attack you. ');
    }

    let secondChanceOfSuccess = Math.floor(Math.random() * 2);

    if (secondChanceOfSuccess === 1) {
      // character.health = character.health - LOSEPOINTS;
      // print(`You have been hit, your health is now ${health}`);
    } else if (secondChanceOfSuccess === 0) {
      print('They missed. Lucky you.');
    }

    // if (choiceOfFight === 'run') {
    //   running = true;
    //   [MODES.MODE]: MODES.EXPLORING
    // } else if(enemyHealth <= 0) {
    //   [MODES.MODE]: MODES.EXPLORING,
    //   alert('You have won!')
    // } else if (health <= 0) {
    //   print('You died. \n\n--------- Game Over ---------');
    //   alive = false; // End Game
    // }
  }

  // Update character's data and return
  return {
    ...character,
    [MODES.MODE]: MODES.EXPLORING,
  };
}
