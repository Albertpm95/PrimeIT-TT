import { Component } from '@angular/core';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'hero-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class HeroListComponent {


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.updateHeroesList()
  }

  private updateHeroesList(): void {

  }
}
