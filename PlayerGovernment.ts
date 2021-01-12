import {
  DataObject,
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';
import {
  RuleRegistry,
  instance as rulesRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import Government from './Government';
import Player from '@civ-clone/core-player/Player';
import Changed from './Rules/Changed';

export interface IPlayerGovernment extends IDataObject {
  current(): Government | null;
  is(...governments: typeof Government[]): boolean;
  player(): Player;
  set(government: Government): void;
}

export class PlayerGovernment extends DataObject implements IPlayerGovernment {
  #government: Government | null = null;
  #player: Player;
  #rulesRegistry: RuleRegistry;

  constructor(
    player: Player,
    rulesRegistry: RuleRegistry = rulesRegistryInstance
  ) {
    super();

    this.#player = player;
    this.#rulesRegistry = rulesRegistry;

    this.addKey(
      'current'
      // 'player',
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
