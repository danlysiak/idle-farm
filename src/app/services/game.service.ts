import { Injectable } from '@angular/core';
import { GameState } from '../models/states';
import { InventoryItem } from '../models/items';
import { NgRedux } from '@angular-redux/store';
import { InventoryService } from './inventory.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private invService: InventoryService,
    private redux: NgRedux<GameState>) { }

  init() {
    // Initialise the calculators
    setInterval(() => this.calculate(), 1000);
  }

  // Calculate any periodic changes
  private calculate() {
    // Get the state of producers/sellers
    const gameState: GameState = this.redux.getState();
    const inventory: { [itemName: string]: InventoryItem } = gameState.inventory.items;

    // Get the rates
    const producersRate = gameState.producers.rates;
    const sellersRate = gameState.sellers.rates;

    // Update inventory
    // TODO: Generalise further for when other inventory items are available
    Object.keys(inventory).forEach(id => {
      this.invService.add(id, producersRate);
      this.invService.remove(id, sellersRate);
    });
  }

}
