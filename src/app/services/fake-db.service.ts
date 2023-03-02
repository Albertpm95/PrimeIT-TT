import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Hero } from '@models/hero';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '@constants'

@Injectable({
  providedIn: 'root'
})
export class FakeDBService {
  create_hero(new_hero: Hero): any {
    throw new Error('Method not implemented.');
  }

  filtered_heroes: Hero[] = []
  heroes: Hero[] = [
    {
      "idHero": 1,
      "name": "Spiderman"
    },
    {
      "idHero": 2,
      "name": "Superman"
    },
    {
      "idHero": 3,
      "name": "Batman"
    },
    {
      "idHero": 4,
      "name": "Lobezno"
    },
    {
      "idHero": 5,
      "name": "Magneto"
    },
    {
      "idHero": 6,
      "name": "Catwoman"
    },
    {
      "idHero": 7,
      "name": "Batwoman"
    },
    {
      "idHero": 8,
      "name": "Punisher"
    },
    {
      "idHero": 9,
      "name": "Dearpool"
    },
    {
      "idHero": 10,
      "name": "Thor"
    }
  ]
  public get_hero_list(): Hero[] {
    return this.heroes
  }

  public get_hero_id(idHero: number): Hero | undefined {
    return this.heroes.find(hero => { hero.idHero === idHero })
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
    if (hero.idHero)
      this.heroes[hero.idHero] = hero

    return updated
  }

  public delete_hero(idHero: number): boolean {
    console.log(this.heroes)
    let borrado: boolean = false;
    this.filtered_heroes = this.heroes.splice(idHero, 1)

    if (!this.get_hero_id(idHero))
      borrado = false;
    console.log(this.filtered_heroes)
    return borrado
  }
}