import {
  ConstructorRegistry,
  IConstructorRegistry,
} from '@civ-clone/core-registry/ConstructorRegistry';
import Government from './Government';
export interface IAvailableGovernmentRegistry
  extends IConstructorRegistry<Government> {}
export declare class AvailableGovernmentRegistry
  extends ConstructorRegistry<Government>
  implements IAvailableGovernmentRegistry {}
export declare const instance: AvailableGovernmentRegistry;
export default AvailableGovernmentRegistry;
