export class Constants { }
export class Routers {
  static HEROES = 'heroes'
}
export class Features {
  static LIST = 'list'
  static EDIT = 'edit'
  static UPDATE = 'update'
  static DELETE = 'delete'
}
export class API_ENDPOINTS {
  static HEROES_LIST = Routers.HEROES + '/' + Features.LIST;
  static HEROES_EDIT = Routers.HEROES + '/' + Features.EDIT;
  static HEROES_UPDATE = Routers.HEROES + '/' + Features.UPDATE;
  static HEROES_DELETE = Routers.HEROES + '/' + Features.DELETE;
}