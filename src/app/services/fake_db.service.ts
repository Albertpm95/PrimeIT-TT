import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Hero } from '@models/hero';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '@constants'

@Injectable({
  providedIn: 'root'
})
export class FakeDBService {

  heroes: Hero[] = [
    {
      "id_hero": 1,
      "name": "Spiderman"
    },
    {
      "id_hero": 2,
      "name": "Superman"
    },
    {
      "id_hero": 3,
      "name": "Batman"
    },
    {
      "id_hero": 4,
      "name": "Lobezno"
    },
    {
      "id_hero": 5,
      "name": "Magneto"
    },
    {
      "id_hero": 6,
      "name": "Catwoman"
    },
    {
      "id_hero": 7,
      "name": "Batwoman"
    },
    {
      "id_hero": 8,
      "name": "Punisher"
    },
    {
      "id_hero": 9,
      "name": "Dearpool"
    },
    {
      "id_hero": 10,
      "name": "Thor"
    }
  ]
  heroes$ = new Observable<Hero[]>

  get_hero_list(): Hero[] {
    return this.heroes
  }

  get_hero_id(id_hero: number): Hero {
    return this.heroes[id_hero]
  }

  get_heroes_similar_name_list(parcial_name: string) {
    this.heroes.forEach(hero => {
      console.log('Parcial name: ', parcial_name, ' Hero name compared: ', hero.name, ' match result: ', hero.name.match(parcial_name))
    })
  }

  update_hero(hero: Hero) {
    if (hero.id_hero)
      this.heroes[hero.id_hero] = hero
  }

  delete_hero(id_hero: number) {
    console.log('Previo: ', this.heroes)
    this.heroes = this.heroes.filter(hero => { hero.id_hero = id_hero })
    console.log('Deleted: ', this.heroes)
  }
}