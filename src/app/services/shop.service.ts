import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { GameState } from '../models/states';
import { InventoryService } from './inventory.service';
import { ShopItem, SHOP_ITEM_TYPES } from '../models/shop-items';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  static BUY_PRODUCER = 'BUY_PRODUCER';
  static BUY_SELLER = 'BUY_SELLER';

  constructor(
    private redux: NgRedux<GameState>,
    private invService: InventoryService) { }

  buy(item: ShopItem): void {
    // Buy the relevant item
    switch (item.type) {
      case SHOP_ITEM_TYPES.PRODUCER:
        this.redux.dispatch({ type: ShopService.BUY_PRODUCER, item });
        break;
      case SHOP_ITEM_TYPES.SELLER:
        this.redux.dispatch({ type: ShopService.BUY_SELLER, item });
        break;
    }

    // Remove cost from money
    this.invService.spendMoney(item.cost);
  }

}
