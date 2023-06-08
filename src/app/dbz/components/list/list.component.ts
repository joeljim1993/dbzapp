import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // public onNewCharacter :EventEmitter<Character> = new EventEmitter();

  public idDeleteCharacter:EventEmitter<number> = new EventEmitter();

  @Input()
  public characterList:Character[]=[{
    name:"trunk",
    power:10
  }];

  // TODO: emitir iD del personaje
  // de esta manera yo envio informacion hacia afuera , el padre
  // se usa la directiva @output
  @Output()
  // se crea una instancia del evento
  onDelete:EventEmitter<number> = new EventEmitter();

    onDeleteCharacter(index:number):void{
    console.log(index);
      this.onDelete.emit( index   );

  }

  // onDeleteId evento emite el index
}
