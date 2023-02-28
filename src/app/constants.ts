export class Constants { }
export class Routers {
  static HEROES = 'heroes'
}
export class Features {
  static LIST = 'list'
}
export class API_ENDPOINTS {
  static HEROES_LIST = Routers.HEROES + '/list';
  static HEROES_EDIT = Routers.HEROES + '/edit';
  static HEROES_UPDATE = Routers.HEROES + '/update';
  static HEROES_DELETE = Routers.HEROES + '/delete';
}