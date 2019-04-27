import { Component, OnInit, Input } from '@angular/core';
import { ITEMS } from '../../models/items';
import { InventoryState } from '../../models/states';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  @Input() inventory: InventoryState;

  items = ITEMS;

  constructor(private invService: InventoryService) { }

  collect(id: string) {
    this.invService.add(id);
  }

  sell(id: string) {
    this.invService.remove(id);
  }

  ngOnInit() {
  }

}
