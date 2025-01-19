import { Component } from '@angular/core';

@Component({
  selector: 'app-count',
  standalone: false,
  template: `
    <h1>Count: {{ count }}</h1>

    <button (click)="increment(+1)">+1</button>
    <button *ngIf="count > 0" (click)="resetCount()">Reset count</button>
    <button (click)="increment(-1)">-1</button>
  `,
})
export class CountComponent {
  public count: number = 0;

  increment(value: number): void {
    this.count += value;

    if (this.count < 0) {
      this.count = 0;
    }
  }
  resetCount(): void {
    this.count = 0;
  }
}
