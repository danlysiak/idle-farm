import { Component, OnInit, Input } from '@angular/core';
import { ShopService } from '../../../services/shop.service';
import { InventoryState } from '../../../models/states';
import { KeyValue } from '@angular/common';
import { ShopType } from '../../../models/shop-type';
import { ShopItem } from '../../../models/shop-items';

@Component({
  selector: 'app-shop-type',
  templateUrl: './shop-type.component.html',
  styleUrls: ['./shop-type.component.scss']
})
export class ShopTypeComponent implements OnInit {

  @Input() shop: ShopType;
  @Input() inventory: InventoryState;
  @Input() first: any;

  constructor(private shopService: ShopService) { }

  buy(item: ShopItem) {
    this.shopService.buy(item);
  }

  // KeyValue comparator to ensure object does not get re-arranged on piping
  order = (a: KeyValue<string, ShopItem>, b: KeyValue<string, ShopItem>): number => 1;

  ngOnInit() {
  }

}
