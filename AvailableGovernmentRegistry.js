"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.AvailableGovernmentRegistry = void 0;
const ConstructorRegistry_1 = require("@civ-clone/core-registry/ConstructorRegistry");
const Government_1 = require("./Government");
class AvailableGovernmentRegistry extends ConstructorRegistry_1.ConstructorRegistry {
    constructor() {
        super(Government_1.default);
    }
}
exports.AvailableGovernmentRegistry = AvailableGovernmentRegistry;
exports.instance = new AvailableGovernmentRegistry();
exports.default = AvailableGovernmentRegistry;
//# sourceMappingURL=AvailableGovernmentRegistry.js.map