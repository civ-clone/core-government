import {
  AvailableGovernmentRegistry,
  instance as availableGovernmentRegistryInstance,
} from './AvailableGovernmentRegistry';
import {
  DataObject,
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';
import {
  RuleRegistry,
  instance as rulesRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import Availability from './Rules/Availability';
import Changed from './Rules/Changed';
import Government from './Government';
import Player from '@civ-clone/core-player/Player';

export interface IPlayerGovernment extends IDataObject {
  available(): typeof Government[];
  current(): Government | null;
  is(...governments: typeof Government[]): boolean;
  player(): Player;
  set(government: Government): void;
}

export class PlayerGovernment extends DataObject implements IPlayerGovernment {
  #availableGovernmentRegistry: AvailableGovernmentRegistry;
  #government: Government | null = null;
  #player: Player;
  #rulesRegistry: RuleRegistry;

  constructor(
    player: Player,
    availableGovernmentRegistry: AvailableGovernmentRegistry = availableGovernmentRegistryInstance,
    rulesRegistry: RuleRegistry = rulesRegistryInstance
  ) {
    super();

    this.#player = player;
    this.#availableGovernmentRegistry = availableGovernmentRegistry;
    this.#rulesRegistry = rulesRegistry;

    this.addKey('available', 'current');
  }

  available(): typeof Government[] {
    return this.#availableGovernmentRegistry.filter(
      (GovernmentType: typeof Government) =>
        this.#rulesRegistry
          .get(Availability)
          .some((rule) => rule.validate(GovernmentType, this.#player))
    );
  }

  current(): Government | null {
    return this.#government;
  }

  is(...governments: typeof Government[]): boolean {
    return governments.some(
      (Government) => this.#government instanceof Government
    );
  }

  player(): Player {
    return this.#player;
  }

  set(government: Government): void {
    this.#government = government;

    this.#rulesRegistry.process(Changed, this.#player, government);
  }
}

export default PlayerGovernment;
