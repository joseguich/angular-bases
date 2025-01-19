import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroComponent } from './component/heroes/hero/hero.component';
import { ListComponent } from './component/heroes/list/list.component';

@NgModule({
  declarations: [HeroComponent, ListComponent],
  exports: [HeroComponent, ListComponent],
  imports: [BrowserModule],
})
export class HeroesModule {}
