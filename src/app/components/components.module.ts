import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DeleteHeroComponent } from './modal/delete-hero/delete-hero.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DeleteHeroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class ComponentsModule { }
