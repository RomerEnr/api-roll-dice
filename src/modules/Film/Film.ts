export class Film {

  constructor(public id: number, public name: string, public autor: string, public year: number) {
    this.id = this.randomID();
  }

  randomID(){
    return Math.floor(Math.random() * 1000);
  }

  
}