import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '@constants';
import { Hero } from '@models/hero';
import { Observable } from 'rxjs';
import { FakeDBService } from './fake-db.service';
import { of } from 'rxjs';
import { environment } from 'environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = environment.apiURL;

  constructor(private http: HttpClient, private fake_db: FakeDBService) { }

  create_hero(new_hero: Hero): Observable<Hero> {
    return of(this.fake_db.create_hero(new_hero))
    // return this.http.put<Hero>(this.apiUrl + API_ENDPOINTS.HEROES_CREATE, { hero })
  }

  get_hero_list(): Observable<Hero[]> {
    return of(this.fake_db.get_hero_list())
    //return this.http.get<Hero[]>(this.apiUrl + API_ENDPOINTS.HEROES_LIST)
  }

  get_hero_id(idHero: number): Observable<Hero | undefined> {
    return of(this.fake_db.get_hero_id(idHero))
    //return this.http.get<Hero>(this.apiUrl + API_ENDPOINTS.HEROES_EDIT + idHero)
  }

  get_heroes_similar_name_list(parcial_name: string): Observable<Hero[]> {
    return of(this.fake_db.get_heroes_similar_name_list(parcial_name))
    //return this.http.get<Hero>(this.apiUrl + API_ENDPOINTS.HEROES_EDIT + parcial_name)
  }

  update_hero(hero: Hero): Observable<boolean> {
    return of(this.fake_db.update_hero(hero))
    //return this.http.post<Hero>(this.apiUrl + API_ENDPOINTS.HEROES_UPDATE, { hero })
  }

  delete_hero(idHero: number): Observable<boolean> {
    return of(this.fake_db.delete_hero(idHero))
    //return this.http.delete(this.apiUrl + API_ENDPOINTS.HEROES_DELETE + idHero)
  }

  public initializeFakeDB(): void {
    this.fake_db.initializeFakeDB()
  }
}
