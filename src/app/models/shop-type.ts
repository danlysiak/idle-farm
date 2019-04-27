import { ShopItem } from './shop-items';
import { Observable } from 'rxjs';

export interface ShopType {
    id: string;
    name: string;
    items: Observable<{ [id: string]: ShopItem }>;
    context: string;
}

export const DEFAULT_SHOP_TYPES: ShopType[] = [
    {
        id: 'producers',
        name: 'Producers',
        items: null,
        context: 'info'
    },
    {
        id: 'sellers',
        name: 'Sellers',
        items: null,
        context: 'success'
    }
];
