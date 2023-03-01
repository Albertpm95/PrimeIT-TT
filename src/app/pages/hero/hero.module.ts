import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';

import { MatPaginatorModule } from '@angular/material/paginator';
import { HeroListComponent } from './list/list.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    HeroListComponent
  ],
  imports: [
    CommonModule,
    HeroRoutingModule,
    MatPaginatorModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class HeroModule { }
