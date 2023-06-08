import { Character } from './../interfaces/character.interface';
import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.component.html'
})

export class MainPagesComponent {
  constructor() { }

  public characters: Character[] = [
    {
      name: "krilin",
      power: 500
    },
    {
      name: "goku",
      power: 9500
    },
    {
      name:"vegeta",
      power:7500
    }
  ];

  onNewCharacter(character:Character):void{
    console.log("chacracter main page",character);
    this.characters.push(character);
    console.log(this.characters);

  }

 onDeleteCharacter(index:number):void{
  console.log("index desde el main page ");
  this.characters.splice(index);



 }

}
