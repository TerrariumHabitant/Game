import promptPkg from 'prompt';
import fs from 'fs';

export function print(string) {
  console.log(string);
}

export function clear() {
  console.clear();
}

let character = null;
export function saveCharacter(c) {
  character = c;
}

export async function save(saveName) {
  try {
    await fs.writeFileSync(
      './savedGames.json',
      JSON.stringify(
        {
          [saveName]: character,
        },
        null,
        2,
      ),
    );
  } catch (_) {
    console.error('Sorry, there was an issue saving your game :(');
  }
}

export async function load() {
  try {
    const games = JSON.parse(await fs.readFileSync('./savedGames.json'));
    print('Here are your saved games.');
    const gameKeys = Object.keys(games);
    gameKeys.forEach((gameKey) => print(gameKey + '\n'));
    const game = await prompt('Which game would you like to load?', gameKeys);
    return games[game];
  } catch (_) {
    console.error('Sorry, there was an issue loading your game :(');
  }
}

export async function prompt(description, availableActions) {
  const RESULT = 'result';
  let needsHelp = true;
  let repeatInput = false;
  let action = '';

  while (needsHelp || repeatInput) {
    needsHelp = false;
    repeatInput = false;
    promptPkg.message = '';
    promptPkg.start();
    const schema = {
      properties: {
        [RESULT]: {
          description,
        },
      },
    };
    action = await promptPkg.get(schema);
    action = action[RESULT];

    if (action === 'exit') {
      clear();
      print('Goodbye 😢\nCome back to ⚔️  another day!');
      process.exit();
    }

    if (action === 'save' && character != null) {
      const saveName = await prompt('Please choose a name for your save');
      await save(saveName);
      print('Your game has been saved');
      repeatInput = true;
      continue;
    }

    if (action === 'help' || (availableActions && !availableActions.includes(action))) {
      needsHelp = true;
      print(
        `${
          action !== 'help' ? `You can't do ${action}. ` : ''
        }Your current options are: ${availableActions.join(', ')}`,
      );
    }
  }

  return action;
}

export function randomSelection(list) {
  return list[Math.floor(Math.random() * list.length)];
}

export function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low)) + low;
}

export async function wait(milliseconds) {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}
