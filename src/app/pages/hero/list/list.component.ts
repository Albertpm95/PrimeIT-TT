import { Component } from '@angular/core';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.updateHeroesList()
  }

  private updateHeroesList(): void {

  }
}
