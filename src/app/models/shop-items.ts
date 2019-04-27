import { Item, INVENTORY_ENUM } from './items';

export enum SHOP_ITEM_TYPES {
    PRODUCER,
    SELLER
}

export interface ShopItem extends Item {
    type: SHOP_ITEM_TYPES;
    rate: number;
    for: INVENTORY_ENUM;
    qty: number;
    multiplier: number;
    cost: number;
}

export enum PRODUCERS_ENUM {
    CHICKEN,
    COUP,
    BARN,
    FIELD,
    RESORT
}

export enum SELLERS_ENUM {
    SIGN,
    NEWSPAPER,
    GUMTREE,
    DEALER,
    SHOP
}

export const PRODUCERS: { [id: string]: ShopItem } = {
    [PRODUCERS_ENUM.CHICKEN]: {
        id: PRODUCERS_ENUM.CHICKEN,
        name: 'Chicken',
        type: SHOP_ITEM_TYPES.PRODUCER,
        cost: 10,
        rate: 0.1,
        for: INVENTORY_ENUM.EGG,
        qty: 0,
        multiplier: 1.05
    },
    [PRODUCERS_ENUM.COUP]: {
        id: PRODUCERS_ENUM.COUP,
        name: 'Chicken Coup',
        type: SHOP_ITEM_TYPES.PRODUCER,
        cost: 100,
        rate: 1,
        for: INVENTORY_ENUM.EGG,
        qty: 0,
        multiplier: 1.05
    },
    [PRODUCERS_ENUM.BARN]: {
        id: PRODUCERS_ENUM.BARN,
        name: 'Chicken Barn',
        type: SHOP_ITEM_TYPES.PRODUCER,
        cost: 1000,
        rate: 5,
        for: INVENTORY_ENUM.EGG,
        qty: 0,
        multiplier: 1.05
    },
    [PRODUCERS_ENUM.FIELD]: {
        id: PRODUCERS_ENUM.FIELD,
        name: 'Field Of Wild Chickens',
        type: SHOP_ITEM_TYPES.PRODUCER,
        cost: 3000,
        rate: 10,
        for: INVENTORY_ENUM.EGG,
        qty: 0,
        multiplier: 1.05
    },
    [PRODUCERS_ENUM.RESORT]: {
        id: PRODUCERS_ENUM.RESORT,
        name: 'Chicken Resort',
        type: SHOP_ITEM_TYPES.PRODUCER,
        cost: 10000,
        rate: 100,
        for: INVENTORY_ENUM.EGG,
        qty: 0,
        multiplier: 1.05
    }
};

export const SELLERS: { [id: string]: ShopItem } = {
    [SELLERS_ENUM.SIGN]: {
        id: SELLERS_ENUM.SIGN,
        name: 'For Sale Sign',
        type: SHOP_ITEM_TYPES.SELLER,
        cost: 20,
        rate: 0.1,
        for: INVENTORY_ENUM.EGG,
        qty: 0,
        multiplier: 1.05
    },
    [SELLERS_ENUM.NEWSPAPER]: {
        id: SELLERS_ENUM.NEWSPAPER,
        name: 'Newspaper Ad',
        type: SHOP_ITEM_TYPES.SELLER,
        cost: 50,
        rate: 1,
        for: INVENTORY_ENUM.EGG,
        qty: 0,
        multiplier: 1.05
    },
    [SELLERS_ENUM.GUMTREE]: {
        id: SELLERS_ENUM.GUMTREE,
        name: 'Gumtree Ad',
        type: SHOP_ITEM_TYPES.SELLER,
        cost: 75,
        rate: 5,
        for: INVENTORY_ENUM.EGG,
        qty: 0,
        multiplier: 1.05
    },
    [SELLERS_ENUM.DEALER]: {
        id: SELLERS_ENUM.DEALER,
        name: 'Chicken Dealer',
        type: SHOP_ITEM_TYPES.SELLER,
        cost: 100,
        rate: 7,
        for: INVENTORY_ENUM.EGG,
        qty: 0,
        multiplier: 1.05
    },
    [SELLERS_ENUM.SHOP]: {
        id: SELLERS_ENUM.SHOP,
        name: 'Shopkeeper',
        type: SHOP_ITEM_TYPES.SELLER,
        cost: 200,
        rate: 10,
        for: INVENTORY_ENUM.EGG,
        qty: 0,
        multiplier: 1.05
    }
};
