import promptPkg from 'prompt';
import colors from "colors";

export function alert(string) {
    console.log(string);
}

export async function prompt(result, description, availableActions) {
    let needsHelp = true;
    let action = '';

    while (needsHelp) {
        needsHelp = false;
        promptPkg.message = "";
        promptPkg.start();
        const schema = {
            properties: {
                [result]: {
                    description
                }
            } 
        };
        action = await promptPkg.get(schema);
        action = action[result];

        if (action === "help" || (availableActions && !availableActions.includes(action))) {
            needsHelp = true;
            alert (`${action !== "help" 
                ? `You can't do ${action}. `
                : ""}Your current options are: ${availableActions.join(", ")}`);
        }
    }

    return {[result]: action};
}

export function randomSelection(list) {
    return list[Math.floor(Math.random() * list.length)];
}