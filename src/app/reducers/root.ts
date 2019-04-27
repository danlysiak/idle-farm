import { combineReducers } from 'redux';
import { inventoryReducer } from './inventory';
import { createShopReducer } from './shop';
import { ShopService } from '../services/shop.service';
import { SHOP_ITEM_TYPES } from '../models/shop-items';

export const rootReducer = combineReducers({
    inventory: inventoryReducer,
    producers: createShopReducer(ShopService.BUY_PRODUCER, SHOP_ITEM_TYPES.PRODUCER),
    sellers: createShopReducer(ShopService.BUY_SELLER, SHOP_ITEM_TYPES.SELLER)
});
