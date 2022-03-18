import {
  ConstructorRegistry,
  IConstructorRegistry,
} from '@civ-clone/core-registry/ConstructorRegistry';
import Government from './Government';

export interface IAvailableGovernmentRegistry
  extends IConstructorRegistry<Government> {}

export class AvailableGovernmentRegistry
  extends ConstructorRegistry<Government>
  implements IAvailableGovernmentRegistry
{
  constructor() {
    super(Government);
  }
}

export const instance = new AvailableGovernmentRegistry();

export default AvailableGovernmentRegistry;
