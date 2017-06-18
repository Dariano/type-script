"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Spacecraft = (function () {
    function Spacecraft(porpulsor) {
        this.porpulsor = porpulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with " + this.porpulsor);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
//# sourceMappingURL=base-ships.js.map