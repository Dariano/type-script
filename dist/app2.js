"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var ship = new base_ships_1.Spacecraft('hyperspace');
ship.jumpIntoHyperspace();
var falcon = new starfighters_1.MillenniunFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no'));
//# sourceMappingURL=app2.js.map