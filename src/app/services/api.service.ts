import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Hero } from '@models/hero';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '@constants'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: any;

  constructor(private http: HttpClient) { }

  get_hero_list(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl + API_ENDPOINTS.HEROES_LIST)
  }

  get_hero_id(id_hero: number): Observable<Hero> {
    return this.http.get<Hero>(this.apiUrl + API_ENDPOINTS.HEROES_EDIT + id_hero)
  }

  get_hero_similar_name(parcial_name: string) {
    return this.http.get<Hero>(this.apiUrl + API_ENDPOINTS.HEROES_EDIT + parcial_name)
  }

  update_hero(hero: Hero) {
    return this.http.post<Hero>(this.apiUrl + API_ENDPOINTS.HEROES_UPDATE, { hero })
  }

  delete_hero(id_hero: number) {
    return this.http.get<Hero>(this.apiUrl + API_ENDPOINTS.HEROES_DELETE + id_hero)
  }
}
