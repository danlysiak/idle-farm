import { Component, OnInit } from '@angular/core';
import { DevService } from '../../services/dev.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  devMode: Observable<boolean>;

  constructor(private devService: DevService) { }

  toggleDev() {
    this.devService.toggleDev();
  }

  ngOnInit() {
    this.devMode = this.devService.getDevMode();
  }

}
