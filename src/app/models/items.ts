export interface Item {
    id: number;
    name: string;
}

export interface InventoryItem extends Item {
    sell: number;
    count: number;
}

export enum INVENTORY_ENUM {
    EGG
}

export const ITEMS: { [id: string]: InventoryItem } = {
    [INVENTORY_ENUM.EGG]: {
        id: INVENTORY_ENUM.EGG,
        name: 'Eggs',
        sell: 1,
        count: 0
    }
};
