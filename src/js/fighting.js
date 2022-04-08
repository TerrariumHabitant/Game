// export function fight(character, monster) {
//   let alive = true;
//   let running = false;
//
//   while (alive && !running) {
//     let choiceOfFight = prompt('You are in fighting mode. What would you like to do?\n');
//
//     let chanceOfSuccess = Math.floor(Math.random() * 2);
//
//     // Amount of damaged taken should depend on weapon, weapons gained depend on level. Amount of damage taken to character depends on level
//     if (chanceOfSuccess === 1) {
//       enemyHealth = enemyHealth - 1;
//       alert(`You hit. Their health is now at ${enemyHealth}. The other player will go.`);
//     } else if (chanceOfSuccess === 0) {
//       prompt('You missed. The other player will now go. ');
//     }
//
//     let secondChanceOfSuccess = Math.floor(Math.random() * 2);
//
//     if (secondChanceOfSuccess === 1) {
//       health = health - 1;
//       alert(`You have been hit, your health is now ${health}`);
//     } else if (secondChanceOfSuccess === 0) {
//       alert('They missed. ');
//     }
//
//     if (choiceOfFight === 'leave') {
//       running = true; // Exit this file
//     } else if (health < 0) {
//       alert('You died. \n\n--------- Game Over ---------');
//       alive = false; // End Game
//     }
//   }
// }
