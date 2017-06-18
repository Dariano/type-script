class Spacecraft {
    constructor(public porpulsor: string){}

    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.porpulsor}`);        
    }
}

interface ContainerShip {
    cargoContainers: number
}

export { Spacecraft, ContainerShip }