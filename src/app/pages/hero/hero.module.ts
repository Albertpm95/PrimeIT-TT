import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';

import { MatPaginatorModule } from '@angular/material/paginator';
import { HeroListComponent } from './list/list.component';

@NgModule({
  declarations: [
    HeroListComponent
  ],
  imports: [
    CommonModule,
    HeroRoutingModule,
    MatPaginatorModule
  ]
})
export class HeroModule { }
