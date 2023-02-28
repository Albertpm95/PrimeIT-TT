import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '@constants';
import { Hero } from '@models/hero';
import { Observable } from 'rxjs';
import { FakeDBService } from './fake-db.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: any;

  constructor(private http: HttpClient, private fake_db: FakeDBService) { }

  get_hero_list(): Observable<Hero[]> {
    return of(this.fake_db.get_hero_list())
    //return this.http.get<Hero[]>(this.apiUrl + API_ENDPOINTS.HEROES_LIST)
  }

  get_hero_id(id_hero: number): Observable<Hero> {
    return of(this.fake_db.get_hero_id(id_hero))
    //return this.http.get<Hero>(this.apiUrl + API_ENDPOINTS.HEROES_EDIT + id_hero)
  }

  get_heroes_similar_name_list(parcial_name: string): Observable<Hero[]> {
    return of(this.fake_db.get_heroes_similar_name_list(parcial_name))
    //return this.http.get<Hero>(this.apiUrl + API_ENDPOINTS.HEROES_EDIT + parcial_name)
  }

  update_hero(hero: Hero): Observable<boolean> {
    return of(this.fake_db.update_hero(hero))
    //return this.http.post<Hero>(this.apiUrl + API_ENDPOINTS.HEROES_UPDATE, { hero })
  }

  delete_hero(id_hero: number): Observable<boolean> {
    return of(this.fake_db.delete_hero(id_hero))
    //return this.http.delete(this.apiUrl + API_ENDPOINTS.HEROES_DELETE + id_hero)
  }
}
