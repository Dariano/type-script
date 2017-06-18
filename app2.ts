import { Spacecraft, ContainerShip } from './base-ships'
import { MillenniunFalcon } from './starfighters';

let ship = new Spacecraft('hyperspace')
ship.jumpIntoHyperspace()

let falcon = new MillenniunFalcon()
falcon.jumpIntoHyperspace()

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'yes' : 'no'}`);

