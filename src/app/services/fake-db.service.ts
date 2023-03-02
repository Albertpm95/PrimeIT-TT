import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Hero } from '@models/hero';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '@constants'
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class FakeDBService {

  constructor(private snackbar: MatSnackBar) { }
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

  public create_hero(new_hero: Hero): any {
    new_hero.idHero = this.fake_new_id_generator()
    this.heroes.push(new_hero)
    this.snackbar.open('Created hero', 'Close', { duration: 2000 })
  }

  public get_hero_list(): Hero[] {
    return this.heroes
  }

  public get_hero_id(idHero: number): Hero | undefined {
    let hero_found: Hero | undefined
    this.heroes.find(hero => {
      if (hero.idHero == idHero) hero_found = hero
    })
    return hero_found
  }

  public get_heroes_similar_name_list(parcial_name: string): Hero[] {
    let filteredHeroes: Hero[] = []
    this.heroes.filter(hero => {
      if (hero.name.includes(parcial_name)) {
        filteredHeroes.push(hero)
      }
    })
    return filteredHeroes
  }

  public update_hero(updatedHero: Hero): boolean {
    let updated: boolean = false
    if (updatedHero.idHero) {
      let index = this.heroes.findIndex(hero => hero.idHero === updatedHero.idHero)
      this.heroes[index] = updatedHero
      updated = true
    }
    return updated
  }

  public delete_hero(idHero: number): boolean {
    let borrado: boolean = false;
    let index = this.heroes.findIndex(hero => hero.idHero === idHero)
    this.heroes.splice(index, 1)

    if (this.get_hero_id(idHero))
      borrado = false;

    return borrado
  }

  private fake_new_id_generator(): number {
    return Math.floor((Math.random() * 100) + 1)
  }
}