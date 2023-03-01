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

  public editHero(id_hero: number): void {
    if (id_hero) {
      this.router.navigate([Routers.HEROES + '/' + Features.EDIT, { id_hero: id_hero }])
    }
  }

  public deleteHero(hero: Hero): void {
    console.log('Heroe seleccionado: ', hero)
    if (hero.id_hero) {
      let dialogRef = this.dialog.open(DeleteHeroComponent, {
        data: hero,
        disableClose: false
      })
      dialogRef.afterClosed().subscribe(result => {
        if (result && hero.id_hero) {
          this.apiService.delete_hero(hero.id_hero)
          this.snackbar.open('Se ha eliminado al heroe ' + hero.name)
        }
      });
    }
  }
}
