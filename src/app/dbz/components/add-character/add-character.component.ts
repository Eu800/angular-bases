import { Component, EventEmitter, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: '0',
    name: '',
    power: 0
  };

  emitCharacter():void{

    //Este es una forma de implementar breakpoints en angular
    // debugger;

    // console.log(this.character);
    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);


    this.character = {id:'0',name: '', power: 0};
  }
}
