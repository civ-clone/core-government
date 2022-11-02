import Government from '../Government';
import Player from '@civ-clone/core-player/Player';
import Rule from '@civ-clone/core-rule/Rule';

export class Availability extends Rule<[typeof Government, Player], void> {}

export default Availability;
