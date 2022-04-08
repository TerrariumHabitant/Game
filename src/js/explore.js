import { locations } from "./definitions/locations";
import { ALL_ACTIONS } from "./definitions/actions";
import { prompt, alert } from "./tools";

export async function explore(character) {
    const {location} = character;
    const mapLocation = locations(character)[location];
    const forbidden_acts = mapLocation.forbidden_acts;
    const availableActions = ALL_ACTIONS.filter(action => !forbidden_acts.includes(action));

    alert(mapLocation["description"]);

    alert("Your options are: " + availableActions.join(', '));

    const {action} = await prompt("action", "What do you want to do?", availableActions);

    character = Object.assign(character, mapLocation[action]);

    // character = {
    //     ...character,
    //     ...mapLocation[action]
    // };

    return character;
}