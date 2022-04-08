import {DESCRIPTION, LOCATION, getAllLocations} from "./definitions/locations";
import {HISTORY} from "./definitions/character";
import { ALL_ACTIONS } from "./definitions/actions";
import {prompt, alert, clear} from "./tools";

export async function explore(character) {
    const mapLocation = getAllLocations(character)[character[LOCATION]];
    const availableActions = Object.keys(mapLocation).filter(key => ALL_ACTIONS.includes(key));

    // Record that we were here
    character[LOCATION+HISTORY].push(character[LOCATION]);

    clear();
    alert("◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️◼️");
    alert(mapLocation[DESCRIPTION]);
    alert("");
    alert("Your options are: " + availableActions.join(', '));
    const action = await prompt("What do you want to do?", availableActions);

    character = Object.assign(character, mapLocation[action]);

    // character = {
    //     ...character,
    //     ...mapLocation[action]
    // };

    return character;
}