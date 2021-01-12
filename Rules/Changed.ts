import Government from '../Government';
import { IRuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Player from '@civ-clone/core-player/Player';
import Rule from '@civ-clone/core-rule/Rule';

export class Changed extends Rule<[Player, Government], void> {}

export default Changed;

export interface IChangedRegistry
  extends IRuleRegistry<Changed, [Player, Government], void> {}
