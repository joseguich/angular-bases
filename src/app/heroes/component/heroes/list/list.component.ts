import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroesName: string[] = [
    'Spiderman',
    'Ironman',
    'Thur',
    'Batman',
    'Dedpol',
  ];
  public deleteHero?: string;

  removeLasHero(): void {
    this.deleteHero = this.heroesName.pop();
  }
}
