import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Features, Routers } from '@constants';
import { HeroEditComponent } from './edit/edit.component';
import { HeroListComponent } from './list/list.component';


const routes: Routes = [
  { path: Routers.HEROES + '/' + Features.LIST, component: HeroListComponent },
  { path: Routers.HEROES + '/' + Features.EDIT, component: HeroEditComponent },
  { path: '**', redirectTo: Routers.HEROES + '/' + Features.LIST }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
