import { NgModule } from '@angular/core';
import { CountComponent } from './component/counter/counter.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [CountComponent],

  imports: [BrowserModule],

  // Para permitir que el componenete pueda ser utilizado en el exterior
  exports: [CountComponent],
})
export class CounterModule {}
