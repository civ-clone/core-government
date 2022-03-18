"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PlayerGovernment_availableGovernmentRegistry, _PlayerGovernment_government, _PlayerGovernment_player, _PlayerGovernment_rulesRegistry;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerGovernment = void 0;
const AvailableGovernmentRegistry_1 = require("./AvailableGovernmentRegistry");
const DataObject_1 = require("@civ-clone/core-data-object/DataObject");
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Changed_1 = require("./Rules/Changed");
const Availability_1 = require("./Rules/Availability");
class PlayerGovernment extends DataObject_1.DataObject {
    constructor(player, availableGovernmentRegistry = AvailableGovernmentRegistry_1.instance, rulesRegistry = RuleRegistry_1.instance) {
        super();
        _PlayerGovernment_availableGovernmentRegistry.set(this, void 0);
        _PlayerGovernment_government.set(this, null);
        _PlayerGovernment_player.set(this, void 0);
        _PlayerGovernment_rulesRegistry.set(this, void 0);
        __classPrivateFieldSet(this, _PlayerGovernment_player, player, "f");
        __classPrivateFieldSet(this, _PlayerGovernment_availableGovernmentRegistry, availableGovernmentRegistry, "f");
        __classPrivateFieldSet(this, _PlayerGovernment_rulesRegistry, rulesRegistry, "f");
        this.addKey('available', 'current');
    }
    available() {
        return __classPrivateFieldGet(this, _PlayerGovernment_availableGovernmentRegistry, "f").filter((GovernmentType) => __classPrivateFieldGet(this, _PlayerGovernment_rulesRegistry, "f")
            .get(Availability_1.default)
            .some((rule) => rule.validate(GovernmentType, __classPrivateFieldGet(this, _PlayerGovernment_player, "f"))));
    }
    current() {
        return __classPrivateFieldGet(this, _PlayerGovernment_government, "f");
    }
    is(...governments) {
        return governments.some((Government) => __classPrivateFieldGet(this, _PlayerGovernment_government, "f") instanceof Government);
    }
    player() {
        return __classPrivateFieldGet(this, _PlayerGovernment_player, "f");
    }
    set(government) {
        __classPrivateFieldSet(this, _PlayerGovernment_government, government, "f");
        __classPrivateFieldGet(this, _PlayerGovernment_rulesRegistry, "f").process(Changed_1.default, __classPrivateFieldGet(this, _PlayerGovernment_player, "f"), government);
    }
}
exports.PlayerGovernment = PlayerGovernment;
_PlayerGovernment_availableGovernmentRegistry = new WeakMap(), _PlayerGovernment_government = new WeakMap(), _PlayerGovernment_player = new WeakMap(), _PlayerGovernment_rulesRegistry = new WeakMap();
exports.default = PlayerGovernment;
//# sourceMappingURL=PlayerGovernment.js.map