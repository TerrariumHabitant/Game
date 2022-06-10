import { DESCRIPTION, getAllEnemies, RUN_TEXT, WIN_TEXT, LOSE_TEXT } from './definitions/enemies';
import { prompt, randomSelection, print, wait } from './tools';
import * as MODES from './definitions/modes';
import { LOCATION, LOCATIONS } from './definitions/locations';
import { getUserLevel } from './definitions/character';
import { MIN_LEVEL, LOSEPOINTS, HITPOINTS, ENEMYHEALTH } from './definitions/enemies';

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

  let running = false;
  let enemyDefeated = false;

  print(currentEnemy[DESCRIPTION]);
  print('You are now in fighting mode. Don your armour, and tremble!.');

  // battle code
  while (!running && !enemyDefeated) {
    let choiceOfFight = await prompt('What would you like to do?\n You may run, or attack.');

    if (choiceOfFight === 'attack') {
      let chanceOfSuccess = Math.floor(Math.random() * 2);

      // Amount of damaged taken should depend on weapon, weapons gained depend on level. Amount of damage taken to character depends on level -True?
      if (chanceOfSuccess === 1) {
        currentEnemy[ENEMYHEALTH] = currentEnemy[ENEMYHEALTH] - currentEnemy[HITPOINTS];
        print(
          `You hit. Their health is now at ` +
            currentEnemy[ENEMYHEALTH] +
            ` They'll will fight back.`,
        );
      } else if (chanceOfSuccess === 0) {
        print('You missed. They will attack you. ');
      }

      let secondChanceOfSuccess = Math.floor(Math.random() * 2);

      if (secondChanceOfSuccess === 1) {
        character.health = character.health - currentEnemy[LOSEPOINTS];
        print(`You have been hit, your health is now ` + character.health);
      } else if (secondChanceOfSuccess === 0) {
        print('They missed. Lucky you.');
      }
    } else if (choiceOfFight === 'run') {
      running = true;
      print(currentEnemy[RUN_TEXT]);
    } else if (currentEnemy.enemyhealth <= 0) {
      enemyDefeated = true;
      print(currentEnemy[WIN_TEXT]);
    } else if (character.health <= 0) {
      print(currentEnemy[LOSE_TEXT]);
      print('--------- Game Over ---------');
      process.exit();
    }
  }

  await wait(10000);

  // Update character's data and return
  return {
    ...character,
    [MODES.MODE]: MODES.EXPLORING,
  };
}
