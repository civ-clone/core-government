"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _government, _player, _rulesRegistry;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerGovernment = void 0;
const DataObject_1 = require("@civ-clone/core-data-object/DataObject");
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Changed_1 = require("./Rules/Changed");
class PlayerGovernment extends DataObject_1.DataObject {
    constructor(player, rulesRegistry = RuleRegistry_1.instance) {
        super();
        _government.set(this, null);
        _player.set(this, void 0);
        _rulesRegistry.set(this, void 0);
        __classPrivateFieldSet(this, _player, player);
        __classPrivateFieldSet(this, _rulesRegistry, rulesRegistry);
        this.addKey('current'
        // 'player',
        );
    }
    current() {
        return __classPrivateFieldGet(this, _government);
    }
    is(...governments) {
        return governments.some((Government) => __classPrivateFieldGet(this, _government) instanceof Government);
    }
    player() {
        return __classPrivateFieldGet(this, _player);
    }
    set(government) {
        __classPrivateFieldSet(this, _government, government);
        __classPrivateFieldGet(this, _rulesRegistry).process(Changed_1.default, __classPrivateFieldGet(this, _player), government);
    }
}
exports.PlayerGovernment = PlayerGovernment;
_government = new WeakMap(), _player = new WeakMap(), _rulesRegistry = new WeakMap();
exports.default = PlayerGovernment;
//# sourceMappingURL=PlayerGovernment.js.map