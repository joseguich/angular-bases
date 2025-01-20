import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/list-character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  //Comunicarno con el padre
  @Input()

  // Un listado por default de los personajes.
  public listCharacter: Character[] = [
    {
      name: 'Gohan',
      power: 200,
    },
  ];

  @Input()
  public title: string = 'Lista';
}
