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

export class PlayerGovernmentRegistry
  extends EntityRegistry<PlayerGovernment>
  implements IPlayerGovernmentRegistry {
  constructor() {
    super(PlayerGovernment);
  }

  getByPlayer(player: Player): PlayerGovernment {
    const playerGovernments = this.getBy('player', player);

    if (playerGovernments.length !== 1) {
      throw new TypeError('Wrong number of PlayerGovernments for player.');
    }

    return playerGovernments[0];
  }
}

export const instance: PlayerGovernmentRegistry = new PlayerGovernmentRegistry();

export default PlayerGovernmentRegistry;
