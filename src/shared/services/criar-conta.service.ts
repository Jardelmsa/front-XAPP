import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})



export class CriarContaService {

  private apiUrl = environment.urlApiDev;


  constructor(private http: HttpClient) { }

  criarConta(conta:any) : Observable<any>{
    console.log("Obj antes da requisão", conta)
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/User/create-user-Identity`, conta, { headers });
  }

}
