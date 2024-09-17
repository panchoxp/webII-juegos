import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
    constructor(private http:HttpClient) { }
  private API_USUARIOS= 'http://localhost:3000/users'

  postUsuario(item: any): Observable<any> {
    return this.http.post(this.API_USUARIOS, item)
  }

  getUsuarios():Observable<any>{
    return this.http.get(this.API_USUARIOS)
  }
}
