export class Hero {
  idHero: number | undefined
  name: string = ''

  constructor(name: string, idHero?: number) {
    this.name = name;
    this.idHero = idHero
  }
}