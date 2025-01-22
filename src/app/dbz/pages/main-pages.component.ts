import { Component } from '@angular/core';
import { Character } from '../interfaces/list-character.interface';
import { DbzService } from '../services/services.service';

@Component({
  selector: 'app-dbz-main-pages',
  standalone: false,
  templateUrl: './main-pages.component.html',
})
export class MainPagesComponent {
  // Injeciones
  //Los servicios siempre debe ir privados
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return this.dbzService.character;
  }

  get titlePages(): string {
    return this.dbzService.title;
  }

  onAddCharacter(character: Character): void {
    this.dbzService.onNewCharacter(character);
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.onDelete(id);
  }
}
