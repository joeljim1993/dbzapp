import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid } from 'uuid';
// a-service
@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public characters: Character[] = [
    {
      id:uuid(),
      name: "krilin",
      power: 500
    },
    {
      id:uuid(),
      name: "goku",
      power: 9500
    },
    {
      id:uuid(),
      name:"vegeta",
      power:7500
    }
  ];



  onNewCharacter(character:Character):void{


    const newCharacter: Character ={ id:uuid() ,...character};
    console.log("chacracter main page", newCharacter);
    this.characters.push(newCharacter);


  }

//  onDeleteCharacter(index:number):void{
//   console.log("index desde el main page ");
//   this.characters.splice(index-1,1);
//  }
deleteCharacterById(id:string){
  this.characters = this.characters.filter( character => character.id !== id);
}

}
