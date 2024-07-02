import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NovaContaComponent } from './nova-conta/nova-conta.component';
import { FormsModule } from '@angular/forms';
import { CriarContaService } from 'src/shared/services/criar-conta.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    NovaContaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CriarContaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
