import Government from '../Government';
import Player from '@civ-clone/core-player/Player';
import Rule from '@civ-clone/core-rule/Rule';

export class Changed extends Rule<[Player, Government], void> {}

export default Changed;
