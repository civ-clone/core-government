"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdditionalData = void 0;
const PlayerGovernmentRegistry_1 = require("../PlayerGovernmentRegistry");
const AdditionalData_1 = require("@civ-clone/core-data-object/AdditionalData");
const Player_1 = require("@civ-clone/core-player/Player");
const getAdditionalData = (playerGovernmentRegistry = PlayerGovernmentRegistry_1.instance) => [
    new AdditionalData_1.default(Player_1.default, 'government', (player) => playerGovernmentRegistry.getByPlayer(player)),
];
exports.getAdditionalData = getAdditionalData;
exports.default = exports.getAdditionalData;
//# sourceMappingURL=government.js.map