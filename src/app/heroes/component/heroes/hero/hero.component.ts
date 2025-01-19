import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get heroMethod(): string {
    return this.name.toUpperCase();
  }

  heroInfo(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Superman';
  }

  changeAge(): void {
    this.age = 36;
  }

  resetInfo(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
