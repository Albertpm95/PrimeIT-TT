import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatPaginatorModule } from '@angular/material/paginator';
import { HeroEditComponent } from './edit/edit.component';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroListComponent } from './list/list.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from 'app/directives/directives.module';


@NgModule({
  declarations: [
    HeroListComponent,
    HeroEditComponent
  ],
  imports: [
    CommonModule,
    HeroRoutingModule,
    MatPaginatorModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule
  ]
})
export class HeroModule { }
