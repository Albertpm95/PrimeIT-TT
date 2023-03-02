import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Features, Routers } from '@constants';
import { Hero } from '@models/hero';
import { ApiService } from '@services/api.service';
import { DeleteHeroComponent } from 'app/components/modal/delete-hero/delete-hero.component';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'hero-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class HeroListComponent {

  heroes$: Observable<Hero[]> = new Observable<Hero[]>
  constructor(private apiService: ApiService, private dialog: MatDialog, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.loadHeroList()
  }

  private loadHeroList(): void {
    this.heroes$ = this.apiService.get_hero_list()
  }

  public editHero(idHero: number): void {
    if (idHero) {
      console.log(idHero)
      this.router.navigate([Routers.HEROES + '/' + Features.EDIT, { idHero: idHero }])
    }
  }

  public deleteHero(hero: Hero): void {
    console.log('Heroe seleccionado: ', hero)
    if (hero.idHero) {
      let dialogRef = this.dialog.open(DeleteHeroComponent, {
        data: hero,
        disableClose: false
      })
      dialogRef.afterClosed().subscribe(result => {
        if (result && hero.idHero) {
          this.apiService.delete_hero(hero.idHero)
          this.snackbar.open('Se ha eliminado al heroe ' + hero.name)
        }
      });
    }
  }
}
