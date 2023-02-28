import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routers } from '@constants';
import { HeroModule } from './hero/hero.module';

const routes: Routes = [
  { path: Routers.HEROES, loadChildren: () => HeroModule },
  { path: '**', redirectTo: Routers.HEROES }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
