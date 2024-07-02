import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { NovaContaComponent } from './nova-conta/nova-conta.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login', component:LoginComponent},
  { path: 'dashboard',component: AppComponent},
  { path: 'nova-conta',component: NovaContaComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
