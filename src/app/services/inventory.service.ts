import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { GameState } from '../models/states';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  static ADD_ITEM = 'ADD_ITEM';
  static REMOVE_ITEM = 'REMOVE_ITEM';
  static SPEND_MONEY = 'SPEND_MONEY';
  static GET_MONEY = 'GET_MONEY';

  constructor(private redux: NgRedux<GameState>) { }

  add(itemId: string, qty: number = 1) {
    this.redux.dispatch({ type: InventoryService.ADD_ITEM, itemId, qty });
  }

  remove(itemId: string, qty: number = 1) {
    this.redux.dispatch({ type: InventoryService.REMOVE_ITEM, itemId, qty });
  }

  spendMoney(qty: number) {
    this.redux.dispatch({ type: InventoryService.SPEND_MONEY, qty });
  }

  getMoney(qty: number) {
    this.redux.dispatch({ type: InventoryService.GET_MONEY, qty });
  }

}
