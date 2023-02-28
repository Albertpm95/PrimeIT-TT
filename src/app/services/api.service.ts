import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  get_hero_list() { }

  get_hero_id(id_hero: number) { }

  get_hero_similar_name(parcial_name: string) { }

  update_hero(hero: Hero) { }

  delete_hero(id_hero: number) { }
}
