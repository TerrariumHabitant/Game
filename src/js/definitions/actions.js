export const SHORTCUT_DELIMITER = ':';
export const RUN = `run${SHORTCUT_DELIMITER}w`;
export const HIDE = `hide${SHORTCUT_DELIMITER}s`;
export const SWIM = `swim${SHORTCUT_DELIMITER}x`;
export const FLY = `fly${SHORTCUT_DELIMITER}q`;
export const FIGHT = `fight${SHORTCUT_DELIMITER}d`;

export const DESCRIPTION = {
  [RUN]: 'run',
  [FIGHT]: 'fight',
};

export const FORBIDDEN_ACTS = {
  [SWIM]: 'swim',
  [FLY]: 'fly',
};

export const ALL_ACTIONS = [RUN, HIDE, SWIM, FLY, FIGHT];
