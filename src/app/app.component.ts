import { Component, OnInit } from '@angular/core';
import { Hero } from '@models/hero';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PrimeIT-TT';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.initializeFakeDB()
    
  }

}
