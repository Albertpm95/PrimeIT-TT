import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroRoutingModule } from './hero/hero-routing.module';
import { HeroModule } from './hero/hero.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HeroModule,
    HeroRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class PagesModule { }
