import { AvailableGovernmentRegistry } from './AvailableGovernmentRegistry';
import {
  DataObject,
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';
import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Government from './Government';
import Player from '@civ-clone/core-player/Player';
export interface IPlayerGovernment extends IDataObject {
  available(): typeof Government[];
  current(): Government | null;
  is(...governments: typeof Government[]): boolean;
  player(): Player;
  set(government: Government): void;
}
export declare class PlayerGovernment
  extends DataObject
  implements IPlayerGovernment
{
  #private;
  constructor(
    player: Player,
    availableGovernmentRegistry?: AvailableGovernmentRegistry,
    rulesRegistry?: RuleRegistry
  );
  available(): typeof Government[];
  current(): Government | null;
  is(...governments: typeof Government[]): boolean;
  player(): Player;
  set(government: Government): void;
}
export default PlayerGovernment;
