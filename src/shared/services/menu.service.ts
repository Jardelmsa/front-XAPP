import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuVisibilitySource = new BehaviorSubject<boolean>(true);
  menuVisibility$ = this.menuVisibilitySource.asObservable();
  
  constructor() { }

 
  showMenu() {
    this.menuVisibilitySource.next(true);
  }

  hideMenu() {
    this.menuVisibilitySource.next(false);
  }
}
