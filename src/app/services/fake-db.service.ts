import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Hero } from '@models/hero';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '@constants'

@Injectable({
  providedIn: 'root'
})
export class FakeDBService {

  filtered_heroes: Hero[] = []
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
  public get_hero_list(): Hero[] {
    return this.heroes
  }

  public get_hero_id(id_hero: number): Hero | undefined {
    return this.heroes.find(hero => { hero.id_hero === id_hero })
  }

  public get_heroes_similar_name_list(parcial_name: string): Hero[] {
    /*    
        let heroes_filtered_list: Hero[] = []
        this.heroes.filter(hero => {hero.name.match(parcial_name) })
        this.heroes.forEach(hero => {
          console.log('Parcial name: ', parcial_name, ' Hero name compared: ', hero.name, ' match result: ', hero.name.match(parcial_name))
          if (hero.name.match(parcial_name))
            heroes_filtered_list.push(hero)
        })
        return heroes_filtered_list
      */
    return this.heroes.filter(hero => { hero.name.match(parcial_name) })
  }

  public update_hero(hero: Hero): boolean {
    let updated: boolean = false
    if (hero.id_hero)
      this.heroes[hero.id_hero] = hero

    return updated
  }

  public delete_hero(id_hero: number): boolean {
    console.log(this.heroes)
    let borrado: boolean = false;
    this.filtered_heroes = this.heroes.splice(id_hero, 1)

    if (!this.get_hero_id(id_hero))
      borrado = false;
    console.log(this.filtered_heroes)
    return borrado
  }
}