import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevService {

  private devSource = new BehaviorSubject<boolean>(false);
  private dev = this.devSource.asObservable();

  constructor() { }

  toggleDev() {
    this.devSource.next(!this.devSource.value);
  }

  getDevMode(): Observable<boolean> {
    return this.dev;
  }

}
