import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/shared/services/menu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private menuService: MenuService, private router:Router) { }

  ngOnInit(): void {
    this.menuService.hideMenu();
  }

  goToCreateAccount(){
    this.router.navigate(['/nova-conta']);
  }


}
