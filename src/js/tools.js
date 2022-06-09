import promptPkg from 'prompt';
import fs from 'fs';
import FuzzyMatching from "fuzzy-matching";

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

export async function save() {
  try {
    const games = JSON.parse(await fs.readFileSync('./savedGames.json'));
    print('Here are your existing saved games.');
    const gameKeys = Object.keys(games);
    gameKeys.forEach((gameKey) => print(gameKey + '\n'));
  } catch (_) {
    // ignore
  }

  try {
    const saveName = await prompt('Please choose a name for your save');
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
    console.error('Sorry, there was an issue saving your game :(', _);
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

export function fuzzyMatch(input, answers, leniency = 0.5) {
  const fm = new FuzzyMatching(Array.isArray(answers) ? answers : [answers]);
  return fm.get(input, { min: leniency });
}

export async function prompt(description, availableActions) {
  const RESULT = 'result';
  let needsHelp = true;
  let repeatInput = false;
  let action = '';

  availableActions = availableActions && (Array.isArray(availableActions) ? availableActions : [availableActions]);

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

    action = fuzzyMatch(action, [...availableActions || [], 'help', 'save', 'exit']).value || action;

    if (action === 'exit') {
      clear();
      print('Goodbye 😢\nCome back another day! ⚔️');
      process.exit();
    }

    if (action === 'save' && character != null) {
      await save();
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
