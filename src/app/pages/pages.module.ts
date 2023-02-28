import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroRoutingModule } from './hero/hero-routing.module';
import { HeroModule } from './hero/hero.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HeroModule,
    HeroRoutingModule,
  ],
  providers: [],
})
export class PagesModule { }
