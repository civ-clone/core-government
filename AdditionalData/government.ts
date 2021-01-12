import {
  PlayerGovernmentRegistry,
  instance as playerGovernmentRegistryInstance,
} from '../PlayerGovernmentRegistry';
import AdditionalData from '@civ-clone/core-data-object/AdditionalData';
import Player from '@civ-clone/core-player/Player';

export const getAdditionalData = (
  playerGovernmentRegistry: PlayerGovernmentRegistry = playerGovernmentRegistryInstance
) => [
  new AdditionalData(Player, 'government', (player: Player) =>
    playerGovernmentRegistry.getByPlayer(player)
  ),
];

export default getAdditionalData;
