import {
  EntityRegistry,
  IEntityRegistry,
} from '@civ-clone/core-registry/EntityRegistry';
import Player from '@civ-clone/core-player/Player';
import PlayerGovernment from './PlayerGovernment';
export interface IPlayerGovernmentRegistry
  extends IEntityRegistry<PlayerGovernment> {
  getByPlayer(player: Player): PlayerGovernment;
}
export declare class PlayerGovernmentRegistry
  extends EntityRegistry<PlayerGovernment>
  implements IPlayerGovernmentRegistry {
  constructor();
  getByPlayer(player: Player): PlayerGovernment;
}
export declare const instance: PlayerGovernmentRegistry;
export default PlayerGovernmentRegistry;
