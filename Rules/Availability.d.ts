import Government from '../Government';
import { IRuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Player from '@civ-clone/core-player/Player';
import Rule from '@civ-clone/core-rule/Rule';
declare type AvailabilityArgs = [typeof Government, Player];
export declare class Availability extends Rule<AvailabilityArgs, void> {}
export default Availability;
export interface IAvailabilityRegistry
  extends IRuleRegistry<Availability, AvailabilityArgs, void> {}
