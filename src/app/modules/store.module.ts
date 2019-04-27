import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { GameState } from '../models/states';
import { rootReducer } from '../reducers/root';
import { INVENTORY_INITIAL_STATE } from '../reducers/inventory';
import { PROCUCERS_INITIAL_STATE, SELLERS_INITIAL_STATE } from '../reducers/shop';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgReduxModule
  ]
})
export class StoreModule {
  constructor(ngRedux: NgRedux<GameState>) {
    ngRedux.configureStore(
      rootReducer, {
        inventory: INVENTORY_INITIAL_STATE,
        producers: PROCUCERS_INITIAL_STATE,
        sellers: SELLERS_INITIAL_STATE
      });
  }
}
