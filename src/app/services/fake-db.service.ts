import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Hero } from '@models/hero';

@Injectable({
  providedIn: 'root'
})
export class FakeDBService {

  heroes: Hero[] = []
  heroNames: string[] = ['Superman', 'Supergirl', 'Superwomam', 'Spiderman', 'Spiderwoman', 'Catman', 'Catwoman', 'Batman', 'Batwoman', 'Hulk', 'She-Hulk', 'Cpt. America', 'Cpt. Marvel', 'Iron Man', 'Deadpool', 'Tony Stark', 'Peter Parker', 'Invencible', 'Homelander', 'Profesor Charles Xavier', 'Lobezno', 'Anivia', 'Shaco', 'Varian Wrynn', 'Khadgar', 'Legolas', 'Aragorn', 'Shang-Chi', 'Inspector Gadget',]
  constructor(private snackbar: MatSnackBar) { }

  initializeFakeDB() {
    for (let i = 1; i <= 7000; i++) {
      let temp_hero: Hero = new Hero(this.getRandomName(), i)
      this.heroes.push(temp_hero)
    }
  }

  private getRandomName(): string {
    return this.heroNames[Math.floor(Math.random() * this.heroNames.length)]
  }

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
    return Math.floor((Math.random() * 1000) + 1)
  }
}