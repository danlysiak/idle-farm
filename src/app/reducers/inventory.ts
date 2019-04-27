import { InventoryService } from '../services/inventory.service';
import { InventoryAction } from '../models/game-actions';
import { InventoryState } from '../models/states';
import { ITEMS } from '../models/items';

export const INVENTORY_INITIAL_STATE: InventoryState = {
    money: 0,
    items: ITEMS
};

export function inventoryReducer(state: InventoryState = INVENTORY_INITIAL_STATE, action: InventoryAction): InventoryState {
    switch (action.type) {
        case InventoryService.ADD_ITEM:
            return {
                ...state, items: {
                    ...state.items, [action.itemId]: {
                        ...state.items[action.itemId], count: state.items[action.itemId].count + action.qty
                    }
                }
            };
        case InventoryService.REMOVE_ITEM:
            // Check quantity will not end up below 0
            const count = state.items[action.itemId].count;
            let adjustedQty = action.qty;
            let adjustedCount = count - adjustedQty;
            if (adjustedCount < 0 || count === 0) {
                // Adjust values appropriately
                adjustedCount = 0;
                adjustedQty = state.items[action.itemId].count;
            }
            return {
                ...state, money: state.money + (ITEMS[action.itemId].sell * adjustedQty), items: {
                    ...state.items, [action.itemId]: {
                        ...state.items[action.itemId], count: adjustedCount
                    }
                }
            };
        case InventoryService.SPEND_MONEY:
            return { ...state, money: state.money - action.qty };
        case InventoryService.GET_MONEY:
            return { ...state, money: state.money + action.qty };
    }

    return state;
}
