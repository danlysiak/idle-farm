import { Component, OnInit, Input } from '@angular/core';
import { InventoryState, GameState } from '../../models/states';
import { ShopService } from '../../services/shop.service';
import { KeyValue } from '@angular/common';
import { ShopType, DEFAULT_SHOP_TYPES } from '../../models/shop-type';
import { ShopItem } from '../../models/shop-items';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  @Input() inventory: InventoryState;

  shops: ShopType[] = DEFAULT_SHOP_TYPES;

  constructor(
    private shopService: ShopService,
    private game: NgRedux<GameState>) { }

  buy(item: ShopItem) {
    this.shopService.buy(item);
  }

  // KeyValue comparator to keep objects ordered as defined 
  order = (a: KeyValue<string, ShopItem>, b: KeyValue<string, ShopItem>): number => {
    return 1;
  }

  ngOnInit() {
    // Initialise the shops' observables
    this.shops.forEach(shop => {
      shop.items = this.game.select([shop.id, 'items']);
    });
  }

}
