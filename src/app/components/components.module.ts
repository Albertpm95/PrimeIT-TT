import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DeleteHeroComponent } from './modal/delete-hero/delete-hero.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    HeaderComponent,
    DeleteHeroComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [HeaderComponent]
})
export class ComponentsModule { }
