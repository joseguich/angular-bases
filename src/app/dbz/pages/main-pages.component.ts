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
  constructor(public dbzService: DbzService) {}
}
