import { Component, OnInit, Input } from '@angular/core';
import { ShopState } from '../../models/states';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() producers: ShopState;
  @Input() sellers: ShopState;

  constructor() { }

  ngOnInit() {
  }

}
