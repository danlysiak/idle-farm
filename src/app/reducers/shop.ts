import { ShopAction } from '../models/game-actions';
import { ShopState } from '../models/states';
import { SHOP_ITEM_TYPES, PRODUCERS, SELLERS, ShopItem } from '../models/shop-items';

export const PROCUCERS_INITIAL_STATE: ShopState = { type: SHOP_ITEM_TYPES.PRODUCER, items: PRODUCERS, rates: 0 };
export const SELLERS_INITIAL_STATE: ShopState = { type: SHOP_ITEM_TYPES.SELLER, items: SELLERS, rates: 0 };

export function createShopReducer(actionType: string, shopType: SHOP_ITEM_TYPES) {
    return (state: ShopState = { type: shopType, items: {}, rates: 0 }, action: ShopAction): ShopState => {
        switch (action.type) {
            case actionType:
                const item: ShopItem = state.items[action.item.id];
                return {
                    ...state, rates: state.rates + item.rate, items: {
                        ...state.items, [action.item.id]: {
                            ...item, qty: item.qty + 1, cost: +(item.cost * item.multiplier).toFixed(2)
                        }
                    }
                };
        }

        return state;
    };
}
