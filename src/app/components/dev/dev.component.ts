import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { GameState } from '../../models/states';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss']
})
export class DevComponent implements OnInit {

  game$: Observable<GameState>;

  constructor(private redux: NgRedux<GameState>) { }

  ngOnInit() {
    this.game$ = this.redux.select();
  }

}
