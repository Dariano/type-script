"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_ships_1 = require("./base-ships");
var MillenniunFalcon = (function (_super) {
    __extends(MillenniunFalcon, _super);
    function MillenniunFalcon() {
        var _this = _super.call(this, 'heperdrive') || this;
        _this.cargoContainers = 2;
        return _this;
    }
    MillenniunFalcon.prototype.jumpIntoHyperspace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperspace.call(this);
        }
        else {
            console.log('Failed to jump into hyperspace');
        }
    };
    return MillenniunFalcon;
}(base_ships_1.Spacecraft));
exports.MillenniunFalcon = MillenniunFalcon;
//# sourceMappingURL=starfighters.js.map