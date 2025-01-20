import { Component } from '@angular/core';
import { Character } from '../interfaces/list-character.interface';

@Component({
  selector: 'app-dbz-main-pages',
  standalone: false,
  templateUrl: './main-pages.component.html',
})
export class MainPagesComponent {
  public title: string = 'Lista de Personajes';
  public character: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
    },
    {
      name: 'Picoro',
      power: 5000,
    },

    {
      name: 'Frezzer',
      power: 9000,
    },
  ];

  onNewCharacter(character: Character): void {
    console.log('Main Pages');
    console.log(character);
    // this.character.push(character);
  }
}
