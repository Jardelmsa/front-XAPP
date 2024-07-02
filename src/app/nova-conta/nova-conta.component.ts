import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CriarContaService } from 'src/shared/services/criar-conta.service';
import { MenuService } from 'src/shared/services/menu.service';



@Component({
  selector: 'app-nova-conta',
  templateUrl: './nova-conta.component.html',
  styleUrls: ['./nova-conta.component.scss']
})



export class NovaContaComponent implements OnInit {

  constructor( private criarContaService:CriarContaService, private menuService: MenuService, private router:Router) {

    
    
   }

   Email:any;
   Senha:any;
   Celular:any;
   Idade:any;
 
 

  ngOnInit(): void {
    this.menuService.hideMenu();
  
  }

  postCreateAccount(){
    
    const dados = {
      email:this.Email,
      password:this.Senha,
      idade:this.Idade,
      celular:this.Celular,
    }

    console.log("Dados antes de enviar para API",dados);
    this.criarContaService.criarConta(dados).subscribe(response =>{
      console.log("Resposta de API", response);
    }, error =>{
      console.error("erro", error);
    });
  }
  
  irParaLogin(){
      
    this.router.navigate(['/login']);
  }
  

}
