import { Injectable } from '@angular/core';
import { Character } from '../interfaces/list-character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public title: string = 'Lista de Personajes';
  public index: number = 0;
  public character: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Picoro',
      power: 5000,
    },

    {
      id: uuid(),
      name: 'Frezzer',
      power: 9000,
    },
  ];

  onNewCharacter(character: Character): void {
    this.character.push(character);
  }

  onDelete(index: number): void {
    this.character.splice(index, 1);
  }
}
