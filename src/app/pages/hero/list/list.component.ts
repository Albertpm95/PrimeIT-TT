import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Features, Routers } from '@constants';
import { Hero } from '@models/hero';
import { ApiService } from '@services/api.service';
import { DeleteHeroComponent } from 'app/components/modal/delete-hero/delete-hero.component';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'hero-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class HeroListComponent {

  heroes$: Observable<Hero[]> = new Observable<Hero[]>
  partial_name_input = new FormControl('')

  constructor(private apiService: ApiService, private dialog: MatDialog, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.loadHeroList()
    this.partial_name_input.valueChanges.subscribe(partial_name => {
      if (partial_name && partial_name?.length >= 3)
        this.heroes$ = this.apiService.get_heroes_similar_name_list(partial_name)
      else
        this.heroes$ = this.apiService.get_hero_list()
    })

  }

  private loadHeroList(): void {
    this.heroes$ = this.apiService.get_hero_list()
  }

  public searchingHeroName() {
    console.log('Filtering heroes by name')
  }

  public editHero(idHero?: number): void {
    if (idHero)
      this.router.navigate([Routers.HEROES + '/' + Features.EDIT, { idHero: idHero }])
  }

  public addHero(): void {
    this.router.navigate([Routers.HEROES + '/' + Features.EDIT])
  }

  public deleteHero(hero: Hero): void {
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
