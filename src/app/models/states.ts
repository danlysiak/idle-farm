import { InventoryItem } from './items';
import { SHOP_ITEM_TYPES, ShopItem } from './shop-items';

export interface GameState {
    inventory: InventoryState;
    producers: ShopState;
    sellers: ShopState;
}

export interface MoneyState {
    money: number;
}

export interface InventoryState {
    money: number;
    items: { [itemName: string]: InventoryItem };
}

export interface ShopState {
    type: SHOP_ITEM_TYPES;
    rates: number;
    items: { [itemName: string]: ShopItem };
}
