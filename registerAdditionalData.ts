import government from './AdditionalData/government';
import { instance as additionalDataRegistryInstance } from '@civ-clone/core-data-object/AdditionalDataRegistry';

additionalDataRegistryInstance.register(...government());
