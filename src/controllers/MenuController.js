import menuData from '../models/lojaData.json';

class MenuController {
  getMenuData() {
    return menuData.products;
  }
}

export default MenuController;
