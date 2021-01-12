import { instance as additionalDataRegistryInstance } from '@civ-clone/core-data-object/AdditionalDataRegistry';
import government from './AdditionalData/government';

additionalDataRegistryInstance.register(...government());
