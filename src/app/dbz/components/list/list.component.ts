import { Component, EventEmitter, Input, Output} from '@angular/core';

import { Character } from '../../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  // @Output()
  // public emitIndex: EventEmitter<number> = new EventEmitter();
  @Output()
  public emitId: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {id: uuid(),name:'Trunks', power: 10}
  ];

  // onDeleteId(index: number):void{

  //   this.emitIndex.emit(index);
  // }

  onDeleteId(id: string):void{

    this.emitId.emit(id);
  }

  // public onDeleteCharacter(index: number):void {
  //   TDo: Emitir el ID del personaje
  //   console.log(index)
  // }

}
