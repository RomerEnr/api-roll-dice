export class Dice{
    constructor(faces = 6){
        this.faces = faces;
    }

    rollDice(){
        return Math.floor((Math.random() * this.faces) +1);
    }
}