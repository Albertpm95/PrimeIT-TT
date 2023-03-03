import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Features, Routers } from '@constants';
import { Hero } from '@models/hero';
import { ApiService } from '@services/api.service';
import { DeleteHeroComponent } from 'app/components/modal/delete-hero/delete-hero.component';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'hero-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class HeroListComponent {

  heroes$: Observable<Hero[]> = new Observable<Hero[]>
  heroes: Hero[] = []
  partial_name_input = new FormControl('')
  displayedColumns: string[] = ['ID', 'name', 'actions']

  @ViewChild(MatPaginator) paginator: any = MatPaginator

  dataSource = new MatTableDataSource<Hero>()

  constructor(private apiService: ApiService, private dialog: MatDialog, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.loadHeroList()
    this.initializeSearchInput()
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }

  public editHero(idHero?: number): void {
    if (idHero) this.router.navigate([Routers.HEROES + '/' + Features.EDIT, { idHero: idHero }])
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

  private loadHeroList(): void {
    this.apiService.get_hero_list().subscribe(heroes => { this.dataSource.data = heroes; }
    )
  }

  private initializeSearchInput(): void {
    this.partial_name_input.valueChanges.subscribe(partial_name => {
      if (partial_name && partial_name?.length >= 3) {
        this.apiService.get_heroes_similar_name_list(partial_name).subscribe(filtered_heroes => {
          this.dataSource.data = filtered_heroes
        })
      }
      else
        this.loadHeroList()
    })
  }
}
