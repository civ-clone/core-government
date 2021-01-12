"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.PlayerGovernmentRegistry = void 0;
const EntityRegistry_1 = require("@civ-clone/core-registry/EntityRegistry");
const PlayerGovernment_1 = require("./PlayerGovernment");
class PlayerGovernmentRegistry extends EntityRegistry_1.EntityRegistry {
    constructor() {
        super(PlayerGovernment_1.default);
    }
    getByPlayer(player) {
        const playerGovernments = this.getBy('player', player);
        if (playerGovernments.length !== 1) {
            throw new TypeError('Wrong number of PlayerGovernments for player.');
        }
        return playerGovernments[0];
    }
}
exports.PlayerGovernmentRegistry = PlayerGovernmentRegistry;
exports.instance = new PlayerGovernmentRegistry();
exports.default = PlayerGovernmentRegistry;
//# sourceMappingURL=PlayerGovernmentRegistry.js.map