export class Constants { }
export class Routers {
  static HEROES = 'heroes'
}
export class Features {
  static CREATE = 'create'
  static DELETE = 'delete'
  static EDIT = 'edit'
  static LIST = 'list'
  static UPDATE = 'update'
}
export class API_ENDPOINTS {
  static HEROES_CREATE = Routers.HEROES + '/' + Features.CREATE;
  static HEROES_DELETE = Routers.HEROES + '/' + Features.DELETE;
  static HEROES_EDIT = Routers.HEROES + '/' + Features.EDIT;
  static HEROES_LIST = Routers.HEROES + '/' + Features.LIST;
  static HEROES_UPDATE = Routers.HEROES + '/' + Features.UPDATE;
}