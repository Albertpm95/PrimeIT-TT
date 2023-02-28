import { Component } from '@angular/core';
import { Hero } from '@models/hero';
import { ApiService } from '@services/api.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'hero-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class HeroListComponent {

  heroes$: Observable<Hero[]> = new Observable<Hero[]>

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.updateHeroesList()
  }

  private updateHeroesList(): void {
    this.heroes$ = this.apiService.get_hero_list()
  }

  ngOnDestroy() {
  }

}
