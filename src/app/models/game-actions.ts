import { Action } from 'redux';
import { ShopItem } from './shop-items';

export interface MoneyAction extends Action {
    amount: number;
}

export interface InventoryAction extends Action {
    itemId?: string;
    qty: number;
}

export interface ShopAction extends Action {
    item: ShopItem;
}
