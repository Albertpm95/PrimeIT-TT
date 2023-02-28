import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Hero } from '@models/hero';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '@constants'
import { FakeDBService } from './fake_db.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: any;

  constructor(private http: HttpClient, private fake_db: FakeDBService) { }

  get_hero_list() {
    //return this.http.get<Hero[]>(this.apiUrl + API_ENDPOINTS.HEROES_LIST)
    return this.fake_db.get_hero_list()
  }

  get_hero_id(id_hero: number) {
    //return this.http.get<Hero>(this.apiUrl + API_ENDPOINTS.HEROES_EDIT + id_hero)
    return this.fake_db.get_hero_id(id_hero)
  }

  get_heroes_similar_name_list(parcial_name: string) {
    //return this.http.get<Hero>(this.apiUrl + API_ENDPOINTS.HEROES_EDIT + parcial_name)
    return this.fake_db.get_heroes_similar_name_list(parcial_name)
  }

  update_hero(hero: Hero) {
    //return this.http.post<Hero>(this.apiUrl + API_ENDPOINTS.HEROES_UPDATE, { hero })
    return this.fake_db.update_hero(hero)
  }

  delete_hero(id_hero: number) {
    //return this.http.get<Hero>(this.apiUrl + API_ENDPOINTS.HEROES_DELETE + id_hero)
    return this.fake_db.delete_hero(id_hero)
  }
}
