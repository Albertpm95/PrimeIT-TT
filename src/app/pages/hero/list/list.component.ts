import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadHeroList()
  }

  private loadHeroList(): void {
    this.heroes$ = this.apiService.get_hero_list()
  }

  public editHero(id_hero: number) {

  }

  public deleteHero(hero: Hero): void {
    if (hero.id_hero) {
      let dialogRef = this.dialog.open(DeleteHeroComponent, {
        data: hero,
        disableClose: false
      })
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          if (hero.id_hero)
            this.apiService.delete_hero(hero.id_hero)
        }
      });
    }
  }
}
