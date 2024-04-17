import shopData from '../models/lojaData.json';

class ShopController {
    getShopData() {
        return shopData.shop;
    }
}

export default ShopController;
