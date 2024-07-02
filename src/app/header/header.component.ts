import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/shared/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isVisible = true;
  
    constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.menuVisibility$.subscribe(visibility => {
      this.isVisible = visibility;
    });
  }

}
