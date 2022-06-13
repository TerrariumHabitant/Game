import {
  DESCRIPTION,
  getAllEnemies,
  RUN_TEXT,
  WIN_TEXT,
  LOSE_TEXT,
  MIN_LEVEL,
  LOSEPOINTS,
  HITPOINTS,
  ENEMYHEALTH,
  XPPOINTS
} from './definitions/enemies';
import {prompt, randomSelection, print, wait} from './tools';
import * as MODES from './definitions/modes';
import {LOCATION, LOCATIONS} from './definitions/locations';
import {getUserLevel} from './definitions/character';

// pick when, where and which enemy appears
export async function fight(character) {
  const enemies = getAllEnemies();
  const pertinentEnemyKeys = Object.keys(enemies).filter((enemyKey) => {
    if (
      enemies[enemyKey][LOCATIONS].includes(character[LOCATION]) &&
      enemies[enemyKey][MIN_LEVEL] <= getUserLevel(character.points)
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

  print(currentEnemy[DESCRIPTION]);
  print('You are now in fighting mode. Don your armour, and tremble!.');

  // battle code
  let keepFighting = true;
  while (keepFighting) {
    let choiceOfFight = await prompt('What would you like to do?\n You may run, or attack.', [
      'run',
      'attack',
    ]);

    if (choiceOfFight === 'attack') {
      let chanceOfSuccess = Math.floor(Math.random() * 2);

      // Amount of damaged taken should depend on weapon, weapons gained depend on level. Amount of damage taken to character depends on level -True?
      if (chanceOfSuccess === 1) {
        currentEnemy[ENEMYHEALTH] = currentEnemy[ENEMYHEALTH] - currentEnemy[HITPOINTS];
        if (currentEnemy[ENEMYHEALTH] <= 0) {
          print(currentEnemy[WIN_TEXT]);
          character.points = character.points + currentEnemy[XPPOINTS];
          print('Your experience is now at ' + character.points);
          break;
        } else if (currentEnemy[ENEMYHEALTH] > 0) {
          print(` They'll will fight back.`);
        }
      } else if (chanceOfSuccess === 0) {
        print('You missed. They will attack you. ');
      }

      let secondChanceOfSuccess = Math.floor(Math.random() * 2);

      if (secondChanceOfSuccess === 1) {
        character.health = character.health - currentEnemy[LOSEPOINTS];
        print(`You have been hit, your health is now ` + character.health);
        if (character.health <= 0) {
          print(currentEnemy[LOSE_TEXT]);
          print('--------- Game Over ---------');
          process.exit();
        }
      } else if (secondChanceOfSuccess === 0) {
        print('They missed. Lucky you.');
      }
    } else if (choiceOfFight === 'run') {
      print(currentEnemy[RUN_TEXT]);
      break;
    }
  }

  await wait(5000);

  // Update character's data and return
  return {
    ...character,
    justHadAFight: true,
    [MODES.MODE]: MODES.EXPLORING,
  };
}
