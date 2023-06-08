import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter,Output
} from '@angular/core';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  //manera cmo se maneja el output
  @Output()
  // manera cmo se genera la emision del evento
  
  public onNewCharacter :EventEmitter<Character> = new EventEmitter();

  public character:Character ={
    name:"",
    power:0,
  };

  emitCharacter():void{

    console.log("componente hijo ",this.character);
    this.onNewCharacter.emit(this.character);
    if( this.character.name.length === 0) return;



    this.character = {
      name:"",
      power:0
    };


  }

}
