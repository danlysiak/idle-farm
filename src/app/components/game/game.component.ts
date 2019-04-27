import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';
import { InventoryState, ShopState } from '../../models/states';
import { GameService } from '../../services/game.service';
import { DevService } from '../../services/dev.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @select(['inventory']) readonly inventory$: Observable<InventoryState>;
  @select(['producers']) readonly producers$: Observable<ShopState>;
  @select(['sellers']) readonly sellers$: Observable<ShopState>;

  devMode: Observable<boolean>;

  constructor(
    private gameService: GameService,
    private devService: DevService) { }

  ngOnInit() {
    this.gameService.init();
    this.devMode = this.devService.getDevMode();
  }

}
