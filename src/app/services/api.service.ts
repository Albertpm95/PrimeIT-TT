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
    return this.http.get<Hero[]>(this.apiUrl + API_ENDPOINTS.Heroes)
  }

  get_hero_id(id_hero: number) { }

  get_hero_similar_name(parcial_name: string) { }

  update_hero(hero: Hero) { }

  delete_hero(id_hero: number) { }
}
