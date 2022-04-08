import promptPkg from 'prompt';

export function alert(string) {
    console.log(string);
}

export function clear() {
    console.clear();
}

export async function prompt(description, availableActions) {
    const RESULT = "result";
    let needsHelp = true;
    let action = '';

    while (needsHelp) {
        needsHelp = false;
        promptPkg.message = "";
        promptPkg.start();
        const schema = {
            properties: {
                [RESULT]: {
                    description
                }
            } 
        };
        action = await promptPkg.get(schema);
        action = action[RESULT];

        if (action === "exit") {
            clear();
            alert("Goodbye");
            process.exit();
        }

        if (action === "help" || (availableActions && !availableActions.includes(action))) {
            needsHelp = true;
            alert (`${action !== "help" 
                ? `You can't do ${action}. `
                : ""}Your current options are: ${availableActions.join(", ")}`);
        }
    }

    return action;
}

export function randomSelection(list) {
    return list[Math.floor(Math.random() * list.length)];
}